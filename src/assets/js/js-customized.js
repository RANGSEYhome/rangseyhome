// My Customized JS

// start toggle dark-mode
export function setThemeFromCookie() {
  const modeToggler = document.getElementById("darkmode");
  const documentBody = document.body;

  if (!modeToggler) {
    console.error("Dark mode toggle not found!");
    return; // Exit if the element is not found
  }

  function setThemeFromCookie() {
    if (Cookies.get("mode") === "dark-mode") {
      documentBody.classList.add("dark-mode");
      modeToggler.checked = true;
    } else {
      documentBody.classList.remove("dark-mode");
      modeToggler.checked = false;
    }
  }

  setThemeFromCookie();

  modeToggler.addEventListener("change", () => {
    if (modeToggler.checked) {
      documentBody.classList.add("dark-mode");
      Cookies.set("mode", "dark-mode", { expires: 7 });
    } else {
      documentBody.classList.remove("dark-mode");
      Cookies.remove("mode");
    }
  });
}
// end toggle dark-mode

// start toggle language
import Cookies from "js-cookie";
import i18n from "@/i18n/main";
import useBlogPostStore from "@/stores/blog-posts";
import useTestsStore from "@/stores/testimonials";

export function setLanguageFromCookie() {
  const languageToggler = document.getElementById("language-toggle");

  // Get the store instance
  const blogPostStore = useBlogPostStore();
  const testStore = useTestsStore();

  if (!languageToggler) {
    console.error("Language toggle not found!");
    return; // Exit if the element is not found
  }

  // Initialize language based on the cookie or default to 'en'
  const savedLang = Cookies.get("lang") || "en";
  updateLanguage(savedLang, blogPostStore);
  updateLanguage(savedLang, testStore);

  languageToggler.addEventListener("click", () => {
    const newLang = i18n.global.locale === "en" ? "khm" : "en";
    updateLanguage(newLang, blogPostStore);
    updateLanguage(newLang, testStore);
  });
}
function updateLanguage(lang, store) {
  i18n.global.locale = lang; // Change the locale in i18n
  store.setLanguage(lang); // Update language in store and fetch posts
  updateButtonText(lang);
}

function updateButtonText(lang) {
  const languageToggler = document.getElementById("language-toggle");
  languageToggler.innerHTML =
    lang === "en"
      ? '<i class="fas fa-language me-2"></i> ភាសាខ្មែរ'
      : '<i class="fas fa-language me-2"></i> English';
}
// // end toggle language

// start initialize tiny slider
import { tns } from "tiny-slider";

export function initializeSlider() {
  const slider = tns({
    container: ".testimonial-carousel",
    loop: true,
    items: 3,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
    slideBy: "page",
    nav: true,
    autoplay: true,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    gutter: 30,
    navPosition: "bottom",
    controls: false,
    speed: 800,
  });
}
// end initialize tiny slider

// start initialize isotope layout
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";

export function initializeIsotope() {
  const isotopeContainer = document.querySelector(".isotope");
  const filterItems = document.querySelectorAll("#filters .type");

  imagesLoaded(isotopeContainer, function () {
    var iso = new Isotope(isotopeContainer, {
      // options
      itemSelector: ".isotope-item",
      layoutMode: "fitRows",
    });

    // filter items on click
    filterItems.forEach((filterItem) => {
      filterItem.addEventListener("click", (e) => {
        let filterValue = filterItem.getAttribute("data-filter");

        // arrange - https://isotope.metafizzy.co/methods.html
        iso.arrange({ filter: filterValue });

        //toggle active class
        for (let siblingFilterItem of filterItem.parentNode.children) {
          siblingFilterItem.classList.remove("active");
        }
        filterItem.classList.add("active");
      });
    });
  });
}
// end initialize isotope layout

// Function to change the theme
export function changeTheme(themePath) {
  const themeStyleLink = document.getElementById("theme-style");
  if (themeStyleLink) {
    themeStyleLink.href = themePath;
  } else {
    console.error("Theme style link element not found!");
  }
}
