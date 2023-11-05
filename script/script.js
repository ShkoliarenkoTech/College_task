// cart button
const cartButton = document.querySelector("#cart-button");
const closeButton = document.querySelector(".dialog__btn-close");
const modal = document.querySelector(".modal");

const toggleModal = () => {
  modal.classList.toggle("is-open");
};

cartButton.addEventListener("click", toggleModal);

closeButton.addEventListener("click", toggleModal);

new WOW().init();