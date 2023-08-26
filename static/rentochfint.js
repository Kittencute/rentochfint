document.addEventListener("DOMContentLoaded", function () {
  nav_bar_scroll();
  popup_navbar();
  translateLanguage();
  document.getElementById("call-us").addEventListener("click", function() {
    window.location.href = "tel:+1234567890";
  });

  document.getElementById("email-us").addEventListener("click", function() {
      window.location.href = "mailto:info@example.com";
  });
});

function nav_bar_scroll() {
  const navContainer = document.querySelector(".nav-container");
  const navLogo = document.querySelector(".nav-logo");
  const navMenu = document.querySelector(".nav-menu-icon");
  const body = document.querySelector("body");
  window.addEventListener("scroll", function () {
    if (!body.classList.contains("no-scroll")) {
      if (window.scrollY > 0) {
        navContainer.classList.add("nav-container-scroll");
        navLogo.classList.add("nav-logo-scroll");
        navMenu.classList.add("nav-menu-icon-scroll");
      } else {
        navContainer.classList.remove("nav-container-scroll");
        navLogo.classList.remove("nav-logo-scroll");
        navMenu.classList.remove("nav-menu-icon-scroll");
      }
    }
  });
}

function popup_navbar() {
  const menuIcon = document.getElementById("menu-icon");
  const popup = document.getElementById("popup");
  const popupOverlay = document.getElementById("popup-overlay");
  const body = document.body;

  const navContainer = document.querySelector(".nav-container");
  const navLogo = document.querySelector(".nav-logo");
  const navMenu = document.querySelector(".nav-menu-icon");
  menuIcon.addEventListener("click", function () {
    popup.classList.toggle("show-popup");
    popupOverlay.classList.toggle("show-popup");
    body.classList.toggle("no-scroll");
    if (window.scrollY === 0) {
      navContainer.classList.toggle("nav-container-scroll");
      navLogo.classList.toggle("nav-logo-scroll");
      navMenu.classList.toggle("nav-menu-icon-scroll");
      navContainer.classList.toggle("popup-scroll");
      navLogo.classList.toggle("popup-scroll");
      navMenu.classList.toggle("popup-scroll");
    }
  });

  popupOverlay.addEventListener("click", function () {
    popup.classList.toggle("show-popup");
    popupOverlay.classList.toggle("show-popup");
    body.classList.toggle("no-scroll");
    if (window.scrollY === 0) {
      navContainer.classList.remove("nav-container-scroll");
      navLogo.classList.remove("nav-logo-scroll");
      navMenu.classList.remove("nav-menu-icon-scroll");
      navContainer.classList.remove("popup-scroll");
      navLogo.classList.remove("popup-scroll");
      navMenu.classList.remove("popup-scroll");
    }
  });
}

const sweToggle = document.getElementById("sweToggle");
const engToggle = document.getElementById("engToggle");
const popupsweToggle = document.getElementById("popupsweToggle");
const popupengToggle = document.getElementById("popupengToggle");

function translateLanguage() {
  sweToggle.addEventListener("click", function () {
    setLanguagePreference("swe");
    updateLanguage()
  });
  popupsweToggle.addEventListener("click", function () {
    setLanguagePreference("swe");
    updateLanguage()
  });

  engToggle.addEventListener("click", function () {
    setLanguagePreference("eng");
    updateLanguage()
  });
  popupengToggle.addEventListener("click", function () {
    setLanguagePreference("eng");
    updateLanguage()
  });
  updateLanguage()
}

function setLanguagePreference(language) {
  localStorage.setItem("language", language);
}

function updateLanguage() {
  const language = localStorage.getItem("language");
  langToggle(language);
  updateNavLinks(language);
  updateContent(language);
  updateFooter(language);
}

function langToggle(language) {
  if (language === "swe") {
    sweToggle.classList.add("toggled");
    popupsweToggle.classList.add("toggled");
    engToggle.classList.remove("toggled");
    popupengToggle.classList.remove("toggled");
    document.documentElement.lang = "sv";
  } else if (language === "eng") {
    sweToggle.classList.remove("toggled");
    popupsweToggle.classList.remove("toggled");
    engToggle.classList.add("toggled");
    popupengToggle.classList.add("toggled");
    document.documentElement.lang = "en";
  }
}

const popupHomeLink = document.getElementById("popuphomeLink");
const popupServicesLink = document.getElementById("popupservicesLink");
const popupPricesLink = document.getElementById("popuppricesLink");
const popupContactLink = document.getElementById("popupcontactLink");
const popupFaqLink = document.getElementById("popupfaqLink");

const homeLink = document.getElementById("homeLink");
const servicesLink = document.getElementById("servicesLink");
const pricesLink = document.getElementById("pricesLink");
const contactLink = document.getElementById("contactLink");
const faqLink = document.getElementById("faqLink");

const navtranslations = {
  swe: {
    home: "Hem",
    services: "Tjänster",
    prices: "Priser",
    contact: "Kontakt",
    faq: "FAQ",
  },
  eng: {
    home: "Home",
    services: "Services",
    prices: "Prices",
    contact: "Contact",
    faq: "FAQ",
  },
};

function updateNavLinks(language) {
  const translations = navtranslations[language];
  if (translations) {
    popupHomeLink.textContent = translations.home;
    popupServicesLink.textContent = translations.services;
    popupPricesLink.textContent = translations.prices;
    popupContactLink.textContent = translations.contact;
    popupFaqLink.textContent = translations.faq;

    homeLink.textContent = translations.home;
    servicesLink.textContent = translations.services;
    pricesLink.textContent = translations.prices;
    contactLink.textContent = translations.contact;
    faqLink.textContent = translations.faq;
  }
}

function updateContent(language) {
  const contentTranslations = {
    swe: {
      heroTitle: "Ditt personliga städföretag",
      callUs: "Ring oss",
      firstFeature: "Första funktionen",
      secondFeature: "Andra funktionen",
      thirdFeature: "Tredje funktionen",
      rightHalfTitle: "Höger halva",
      leftHalfTitle: "Vänster halva",
      firstThirdTitle: "Första tredje",
      secondThirdTitle: "Andra tredje",
      thirdThirdTitle: "Tredje tredje",
      placeHolderPic: "Platshållarbild",
    },   
    eng: {
      heroTitle: "Your personal cleaning company",
      callUs: "Call us",
      firstFeature: "First feature",
      secondFeature: "Second feature",
      thirdFeature: "Third feature",
      rightHalfTitle: "Right half",
      leftHalfTitle: "Left Half",
      firstThirdTitle: "First third",
      secondThirdTitle: "Second third",
      thirdThirdTitle: "Third third",
      placeHolderPic: "Placeholder picture",
    },
  };

  const translations = contentTranslations[language];
  if (translations) {
    document.getElementById("hero-title").textContent = translations.heroTitle;
    document.getElementById("call-us").textContent = translations.callUs;
    document.getElementById("first-feature").textContent = translations.firstFeature;
    document.getElementById("second-feature").textContent = translations.secondFeature;
    document.getElementById("third-feature").textContent = translations.thirdFeature;
    document.getElementById("right-half").textContent = translations.rightHalfTitle;
    document.getElementById("left-half").textContent = translations.leftHalfTitle;
    document.getElementById("right-half2").textContent = translations.rightHalfTitle;
    document.getElementById("left-half2").textContent = translations.leftHalfTitle;
    document.getElementById("right-half3").textContent = translations.rightHalfTitle;
    document.getElementById("left-half3").textContent = translations.leftHalfTitle;
    document.getElementById("first-third").textContent = translations.firstThirdTitle;
    document.getElementById("second-third").textContent = translations.secondThirdTitle;
    document.getElementById("third-third").textContent = translations.thirdThirdTitle;
    document.getElementById("placeholer-picture").textContent = translations.placeHolderPic;
    document.getElementById("placeholer-picture2").textContent = translations.placeHolderPic;
  }
}

function updateFooter(language) {
  const footerTranslations = {
    swe: {
      contactUs: "Kontakta oss",
      email: "E-post:",
      emailLink: "info@example.com",
      phone: "Telefon:",
      phoneLink: "(123) 456-7890",
      address: "Adress",
      street: "123 Huvudgata",
      cityState: "Stad, Stat 12345",
      socialMedia: "Sociala medier",
      paymentMethods: "Betalningsmetoder",
      workingHours: "Arbetstider",
      weekdays: "Måndag - Fredag: 9:00 - 18:00",
      saturday: "Lördag: 10:00 - 16:00",
      sunday: "Söndag: Stängt",
      ourPartners: "Våra partners",
      rightsReserved: "© 2023 Din Städapp. Alla rättigheter förbehållna.",
      privacyPolicy: "Integritetspolicy",
      termsOfUse: "Användarvillkor",

    },
    eng: {
      contactUs: "Contact Us",
      email: "Email:",
      emailLink: "info@example.com",
      phone: "Phone:",
      phoneLink: "(123) 456-7890",
      address: "Address",
      street: "123 Main Street",
      cityState: "City, State 12345",
      socialMedia: "Social Media",
      paymentMethods: "Payment Methods",
      workingHours: "Working Hours",
      weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
      saturday: "Saturday: 10:00 AM - 4:00 PM",
      sunday: "Sunday: Closed",
      ourPartners: "Our Partners",
      rightsReserved: "© 2023 Your Cleaning App. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfUse: "Terms of Use",
    },
  };

  const translations = footerTranslations[language];
  if (translations) {
    document.getElementById("contact-us").textContent = translations.contactUs;
    document.getElementById("email").textContent = translations.email;
    document.getElementById("email-link").textContent = translations.emailLink;
    document.getElementById("phone").textContent = translations.phone;
    document.getElementById("phone-link").textContent = translations.phoneLink;
    document.getElementById("address").textContent = translations.address;
    document.getElementById("street").textContent = translations.street;
    document.getElementById("city-state").textContent = translations.cityState;
    document.getElementById("social-media").textContent = translations.socialMedia;
    document.getElementById("payment-methods").textContent = translations.paymentMethods;
    document.getElementById("working-hours").textContent = translations.workingHours;
    document.getElementById("weekdays").textContent = translations.weekdays;
    document.getElementById("saturday").textContent = translations.saturday;
    document.getElementById("sunday").textContent = translations.sunday;
    document.getElementById("our-partners").textContent = translations.ourPartners;
    document.getElementById("rights-reserved").textContent = translations.rightsReserved;
    document.getElementById("privacy-policy").textContent = translations.privacyPolicy;
    document.getElementById("terms-of-use").textContent = translations.termsOfUse;
  }
}
