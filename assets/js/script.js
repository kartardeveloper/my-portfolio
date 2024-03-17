const header = document.querySelector(".site-header");
const headerMenuItems = document.querySelectorAll(".nav-list-item__link");
const accordionButtons = document.querySelectorAll(".accordion-heading");
const goTopButton = document.querySelector(".go-top-button");
const scrollDownButton = document.querySelector(".scroll-down-image__wrapper");
const menu = document.querySelector(".nav-list");
const mobileMenuWrapper = document.querySelector(".mobile-menu__wrapper");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuTrigger = document.querySelector(".mobile-menu__trigger");
const pageOverlay = document.querySelector(".page-overlay");
const customCursor = document.querySelector(".custom-cursor");
const customCursorDot = document.querySelector(".custom-cursor-dot");

const headerStickyHandler = () => {
  if (window.scrollY > 180) {
    header.classList.add("header-sticky");
    goTopButton.classList.remove("hide");
  } else {
    header.classList.remove("header-sticky");
    goTopButton.classList.add("hide");
  }
};

const scrollToSpecificSection = (event, targetSection) => {
  event.preventDefault();
  document.querySelector(targetSection).scrollIntoView();
};

window.addEventListener("DOMContentLoaded", headerStickyHandler);
window.addEventListener("scroll", headerStickyHandler);

headerMenuItems.forEach((headerMenuItem) => {
  headerMenuItem.addEventListener("click", (e) => {
    scrollToSpecificSection(e, e.currentTarget.getAttribute("href"));
  });
});

accordionButtons.forEach((accordionButton) => {
  accordionButton.addEventListener("click", (e) => {
    accordionButtons.forEach((accordionButton) => {
      accordionButton.parentElement.classList.remove("accordion-active");
    });
    e.currentTarget.parentElement.classList.toggle("accordion-active");
  });
});

goTopButton &&
  goTopButton.addEventListener("click", (e) => {
    scrollToSpecificSection(e, e.currentTarget.getAttribute("href"));
  });

scrollDownButton &&
  scrollDownButton.addEventListener("click", (e) => {
    scrollToSpecificSection(e, e.currentTarget.getAttribute("href"));
  });

mobileMenu.innerHTML += menu.outerHTML;

mobileMenuTrigger &&
  mobileMenuTrigger.addEventListener("click", () => {
    mobileMenuWrapper.classList.add("mobile-menu__visible");
    pageOverlay.classList.add("page-overlay__visible");
  });

pageOverlay &&
  pageOverlay.addEventListener("click", () => {
    mobileMenuWrapper.classList.remove("mobile-menu__visible");
    pageOverlay.classList.remove("page-overlay__visible");
  });

document.addEventListener("mousemove", (e) => {
  customCursor.style.top = e.clientY + "px";
  customCursor.style.left = e.clientX + "px";
  if (e.target.tagName == "A" || e.target.tagName == "BUTTON") {
    customCursor.classList.add("custom-cursor__onlink");
  } else {
    customCursor.classList.remove("custom-cursor__onlink");
  }
});
