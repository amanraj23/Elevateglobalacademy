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

    const sourceLanguage = document.documentElement.lang || "en";
    const availableLanguages = [...languageSelect.options].map((option) => option.value);
    const translatedAttributeNames = ["alt", "aria-label", "placeholder", "title"];
    const translatedValueTypes = ["button", "submit", "reset"];
    const translationData = window.EGA_TRANSLATIONS || { phrases: {}, words: {} };
    const phraseTranslations = translationData.phrases || {};
    const wordTranslations = translationData.words || {};
    const translationCache = new Map();
    const originalTextNodes = [];
    const originalAttributes = [];
    const trackedTextNodes = new WeakSet();
    const trackedAttributes = new WeakMap();
    let translationRunId = 0;
    let observerTimer;

    const shouldSkipElement = (element) => {
      if (!element) return false;
      if (typeof element.closest !== "function") return false;

      return Boolean(
        element.closest(
          "script, style, noscript, iframe, svg, canvas, .notranslate, [data-no-translate]"
        )
      );
    };

    const trackTextNode = (node) => {
      if (
        !node ||
        trackedTextNodes.has(node) ||
        !node.nodeValue.trim() ||
        shouldSkipElement(node.parentElement)
      ) {
        return;
      }

      trackedTextNodes.add(node);
      originalTextNodes.push({
        node,
        text: node.nodeValue,
      });
    };

    const trackAttribute = (element, attributeName) => {
      const value = element.getAttribute(attributeName);
      if (!value || !value.trim()) return;

      const elementAttributes = trackedAttributes.get(element) || new Set();
      if (elementAttributes.has(attributeName)) return;

      elementAttributes.add(attributeName);
      trackedAttributes.set(element, elementAttributes);
      originalAttributes.push({
        element,
        attributeName,
        text: value,
      });
    };

    const trackElementAttributes = (element) => {
      if (!element || shouldSkipElement(element)) return;

      translatedAttributeNames.forEach((attributeName) => {
        trackAttribute(element, attributeName);
      });

      if (
        element.matches("input") &&
        translatedValueTypes.includes((element.getAttribute("type") || "text").toLowerCase())
      ) {
        trackAttribute(element, "value");
      }
    };

    const collectTranslatableContent = (root = document.body) => {
      if (!root || shouldSkipElement(root.parentElement || root)) return;

      if (root.nodeType === Node.TEXT_NODE) {
        trackTextNode(root);
        return;
      }

      if (
        root.nodeType !== Node.ELEMENT_NODE &&
        root.nodeType !== Node.DOCUMENT_NODE &&
        root.nodeType !== Node.DOCUMENT_FRAGMENT_NODE
      ) {
        return;
      }

      if (root.nodeType === Node.ELEMENT_NODE) {
        trackElementAttributes(root);
      }

      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          if (!node.nodeValue.trim() || shouldSkipElement(node.parentElement)) {
            return NodeFilter.FILTER_REJECT;
          }

          return NodeFilter.FILTER_ACCEPT;
        },
      });

      while (walker.nextNode()) {
        trackTextNode(walker.currentNode);
      }

      if (!root.querySelectorAll) return;

      root.querySelectorAll("*").forEach((element) => {
        trackElementAttributes(element);
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

    const normalizeText = (text) => text.replace(/\s+/g, " ").trim();

    const restoreCase = (originalWord, translatedWord) => {
      if (!translatedWord) return originalWord;
      if (originalWord === originalWord.toUpperCase()) return translatedWord.toUpperCase();
      if (originalWord[0] === originalWord[0].toUpperCase()) {
        return translatedWord.charAt(0).toUpperCase() + translatedWord.slice(1);
      }

      return translatedWord;
    };

    const translateHardcodedText = (text, language) => {
      const normalizedText = normalizeText(text);
      const exactPhrase = phraseTranslations[normalizedText];

      if (exactPhrase && exactPhrase[language]) {
        return text.replace(text.trim(), exactPhrase[language]);
      }

      return text.replace(/[A-Za-z][A-Za-z'’.-]*/g, (word) => {
        const cleanWord = word.replace(/^[^A-Za-z]+|[^A-Za-z]+$/g, "");
        const translatedWord = wordTranslations[cleanWord.toLowerCase()];

        if (!translatedWord || !translatedWord[language]) return word;

        return restoreCase(cleanWord, translatedWord[language]);
      });
    };

    const translateText = (text, language) => {
      const trimmedText = text.trim();
      if (!trimmedText || language === sourceLanguage) return text;

      const cacheKey = `${language}:${trimmedText}`;
      if (translationCache.has(cacheKey)) {
        return text.replace(trimmedText, translationCache.get(cacheKey));
      }

      const translatedText = translateHardcodedText(trimmedText, language);
      translationCache.set(cacheKey, translatedText);

      return text.replace(trimmedText, translatedText);
    };

    const translateItems = (items, language, runId, applyTranslation) => {
      items.forEach((item) => {
        const translatedText = translateText(item.text, language);
        if (runId === translationRunId) {
          applyTranslation(item, translatedText);
        }
      });
    };

    const translatePage = (language) => {
      const runId = ++translationRunId;
      collectTranslatableContent();
      localStorage.setItem("siteLanguage", language);

      languageSelect.disabled = true;
      restoreOriginalContent();

      if (language === sourceLanguage) {
        document.documentElement.lang = sourceLanguage;
        document.documentElement.dir = "ltr";
        languageSelect.disabled = false;
        return;
      }

      try {
        translateItems(originalTextNodes, language, runId, (item, translatedText) => {
          item.node.nodeValue = translatedText;
        });

        translateItems(originalAttributes, language, runId, (item, translatedText) => {
          item.element.setAttribute(item.attributeName, translatedText);
        });

        if (runId !== translationRunId) return;
        document.documentElement.lang = language;
        document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
      } catch (error) {
        if (runId !== translationRunId) return;
        console.warn("Unable to translate this page.", error);
        restoreOriginalContent();
        languageSelect.value = sourceLanguage;
        localStorage.setItem("siteLanguage", sourceLanguage);
        document.documentElement.lang = sourceLanguage;
        document.documentElement.dir = "ltr";
      } finally {
        languageSelect.disabled = false;
      }
    };

    const savedLanguage = localStorage.getItem("siteLanguage");
    if (savedLanguage && availableLanguages.includes(savedLanguage)) {
      languageSelect.value = savedLanguage;
    }

    languageSelect.addEventListener("change", () => translatePage(languageSelect.value));

    const translateAddedContent = (nodes) => {
      nodes.forEach((node) => collectTranslatableContent(node));

      if (languageSelect.value === sourceLanguage) return;

      window.clearTimeout(observerTimer);
      observerTimer = window.setTimeout(() => {
        translatePage(languageSelect.value);
      }, 100);
    };

    const translationObserver = new MutationObserver((mutations) => {
      const addedNodes = mutations.reduce((nodes, mutation) => {
        return nodes.concat([...mutation.addedNodes]);
      }, []);

      if (addedNodes.length) {
        translateAddedContent(addedNodes);
      }
    });

    translationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    if (languageSelect.value !== sourceLanguage) {
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
