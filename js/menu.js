function toggleStyle(el, styleName, value) {
  if (el.style[styleName] !== value) {
    el.style[styleName] = value;
  } else {
    el.style[styleName] = '';
  }
};

(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const logo = document.querySelector(".logo");
  const body = document.querySelector("body");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");

    logo.classList.toggle("logo--hidden");

    toggleStyle(refs.body, 'overflow', 'hidden')

  });
})();