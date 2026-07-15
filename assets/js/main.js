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
    const savedLanguage = document.cookie.match(/googtrans=\/en\/([^;]+)/);
    const availableLanguages = [...languageSelect.options].map((option) => option.value);

    if (savedLanguage && availableLanguages.includes(savedLanguage[1])) {
      languageSelect.value = savedLanguage[1];
    }

    window.googleTranslateElementInit = () => {
      new google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: availableLanguages.join(","),
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const loadGoogleTranslate = () => {
      if (select('script[src*="translate.google.com/translate_a/element.js"]')) return;

      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    };

    const saveLanguageCookie = (language) => {
      const value = `/en/${language}`;
      document.cookie = `googtrans=${value};path=/`;

      if (location.hostname.includes(".")) {
        document.cookie = `googtrans=${value};path=/;domain=.${location.hostname}`;
      }
    };

    const translatePage = (language, attempt = 0) => {
      saveLanguageCookie(language);

      const googleCombo = select(".goog-te-combo");
      if (googleCombo) {
        googleCombo.value = language;
        googleCombo.dispatchEvent(new Event("change"));
        return;
      }

      loadGoogleTranslate();

      if (attempt < 8) {
        setTimeout(() => translatePage(language, attempt + 1), 500);
      }
    };

    languageSelect.addEventListener("change", () => translatePage(languageSelect.value));
    loadGoogleTranslate();
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
