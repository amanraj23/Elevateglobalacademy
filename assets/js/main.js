(function () {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim();
    return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
  };

  const on = (type, el, listener, all = false) => {
    const selectEl = select(el, all);
    if (!selectEl) return;

    if (all) {
      selectEl.forEach((e) => e.addEventListener(type, listener));
    } else {
      selectEl.addEventListener(type, listener);
    }
  };

  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  const setupTranslation = () => {
    const languageSelect = select("#site-language");
    if (!languageSelect) return;
    const translator = languageSelect.closest(".language-translator");
    const topNav = select("#top-nav");

    if (translator && topNav && !topNav.contains(translator)) {
      topNav.appendChild(translator);
    }

    const pageLanguage = document.documentElement.lang || "en";
    const availableLanguages = [...languageSelect.options].map((option) => option.value);
    const translatedAttributeNames = ["alt", "aria-label", "placeholder", "title"];
    const translationCache = new Map();
    const originalTextNodes = [];
    const originalAttributes = [];
    let translationRunId = 0;

    const shouldSkipElement = (element) => {
      if (!element) return false;

      return Boolean(
        element.closest(
          "script, style, noscript, iframe, svg, canvas, .notranslate, [data-no-translate]"
        )
      );
    };

    const collectTranslatableContent = () => {
      if (originalTextNodes.length || originalAttributes.length) return;

      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          if (!node.nodeValue.trim() || shouldSkipElement(node.parentElement)) {
            return NodeFilter.FILTER_REJECT;
          }

          return NodeFilter.FILTER_ACCEPT;
        },
      });

      while (walker.nextNode()) {
        originalTextNodes.push({
          node: walker.currentNode,
          text: walker.currentNode.nodeValue,
        });
      }

      document.querySelectorAll("*").forEach((element) => {
        if (shouldSkipElement(element)) return;

        translatedAttributeNames.forEach((attributeName) => {
          const value = element.getAttribute(attributeName);
          if (!value || !value.trim()) return;

          originalAttributes.push({
            element,
            attributeName,
            text: value,
          });
        });
      });
    };

    const restoreOriginalContent = () => {
      originalTextNodes.forEach((item) => {
        item.node.nodeValue = item.text;
      });

      originalAttributes.forEach((item) => {
        item.element.setAttribute(item.attributeName, item.text);
      });
    };

    const translateText = async (text, language) => {
      const trimmedText = text.trim();
      if (!trimmedText || language === pageLanguage) return text;

      const cacheKey = `${language}:${trimmedText}`;
      if (translationCache.has(cacheKey)) {
        return text.replace(trimmedText, translationCache.get(cacheKey));
      }

      const endpoint = new URL("https://translate.googleapis.com/translate_a/single");
      endpoint.searchParams.set("client", "gtx");
      endpoint.searchParams.set("sl", pageLanguage);
      endpoint.searchParams.set("tl", language);
      endpoint.searchParams.set("dt", "t");
      endpoint.searchParams.set("q", trimmedText);

      const response = await fetch(endpoint.toString());
      if (!response.ok) {
        throw new Error(`Translation request failed with status ${response.status}`);
      }

      const data = await response.json();
      if (!Array.isArray(data[0])) return text;

      const translatedText = data[0].map((segment) => segment[0]).join("");
      translationCache.set(cacheKey, translatedText);

      return text.replace(trimmedText, translatedText);
    };

    const translateItems = async (items, language, runId, applyTranslation) => {
      const queue = [...items];
      const workers = Array.from({ length: 6 }, async () => {
        while (queue.length) {
          const item = queue.shift();
          const translatedText = await translateText(item.text, language);
          if (runId === translationRunId) {
            applyTranslation(item, translatedText);
          }
        }
      });

      const results = await Promise.allSettled(workers);
      const failedResult = results.find((result) => result.status === "rejected");
      if (failedResult) throw failedResult.reason;
    };

    const translatePage = async (language) => {
      const runId = ++translationRunId;
      collectTranslatableContent();
      localStorage.setItem("siteLanguage", language);

      languageSelect.disabled = true;
      restoreOriginalContent();

      if (language === pageLanguage) {
        document.documentElement.lang = pageLanguage;
        languageSelect.disabled = false;
        return;
      }

      try {
        await translateItems(originalTextNodes, language, runId, (item, translatedText) => {
          item.node.nodeValue = translatedText;
        });

        await translateItems(originalAttributes, language, runId, (item, translatedText) => {
          item.element.setAttribute(item.attributeName, translatedText);
        });

        if (runId !== translationRunId) return;
        document.documentElement.lang = language;
      } catch (error) {
        if (runId !== translationRunId) return;
        console.warn("Unable to translate this page.", error);
        restoreOriginalContent();
        languageSelect.value = pageLanguage;
        localStorage.setItem("siteLanguage", pageLanguage);
        document.documentElement.lang = pageLanguage;
      } finally {
        languageSelect.disabled = false;
      }
    };

    const savedLanguage = localStorage.getItem("siteLanguage");
    if (savedLanguage && availableLanguages.includes(savedLanguage)) {
      languageSelect.value = savedLanguage;
    }

    languageSelect.addEventListener("change", () => translatePage(languageSelect.value));

    if (languageSelect.value !== pageLanguage) {
      translatePage(languageSelect.value);
    }
  };

  setupTranslation();

  const backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };

    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  on("click", ".mobile-nav-toggle", function () {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  const preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });

  new PureCounter();
})();
/*ntListener("load", () => {
      preloader.remove();
    });
  }

  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });

  new PureCounter();
}*/  
