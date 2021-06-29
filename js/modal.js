function toggleStyle(el, styleName, value) {
  if (el.style[styleName] !== value) {
    el.style[styleName] = value;
  } else {
    el.style[styleName] = '';
  }
};

const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        backdrop: document.querySelector("[data-backdrop]"),
        body: document.querySelector("body")
      };

      refs.openModalBtn.addEventListener("click", toggleModal);
      refs.closeModalBtn.addEventListener("click", toggleModal);

      function toggleModal() {
        refs.backdrop.classList.toggle("is-hidden");
        toggleStyle(refs.body, 'overflow', 'hidden')
      }
