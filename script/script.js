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

// day 1
const authButton = document.querySelector(".btn-login");
const modalAuthButton = document.querySelector(".modal-btn-login");
const authModal = document.querySelector(".modal-auth");
const authClose = document.querySelector(".close-auth");
const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#login");
const passwordInput = document.querySelector("#password");
const userName = document.querySelector(".user-name");
const logoutButton = document.querySelector("#out-button");

let login = localStorage.getItem("pizzaAuth");

function toggleAuthModal() {
  authModal.classList.toggle("is-open");
}

function authorized() {
  console.log("Authorized");

  function logOut() {
    login = null;

    localStorage.removeItem("pizzaAuth");

    authButton.style.display = "";
    userName.style.display = "";
    logoutButton.style.display = "";
    logoutButton.removeEventListener("click", logOut);
    checkAuth();
  }

  userName.textContent = login;

  authButton.style.display = "none";
  userName.style.display = "inline";
  logoutButton.style.display = "flex";

  logoutButton.addEventListener("click", logOut);
}

function notAuthorized() {
  console.log("Not authorized");

  function logIn(event) {
    event.preventDefault();
    login = loginInput.value;

    localStorage.setItem("pizzaAuth", login);

    toggleAuthModal();
    authButton.removeEventListener("click", toggleAuthModal);
    authClose.removeEventListener("click", toggleAuthModal);
    loginForm.removeEventListener("submit", logIn);
    loginForm.reset();
    checkAuth();
  }

  authButton.addEventListener("click", toggleAuthModal);
  authClose.addEventListener("click", toggleAuthModal);
  loginForm.addEventListener("submit", logIn);
}

function checkAuth() {
  if (login) {
    authorized();
  } else {
    notAuthorized();
  }
}

checkAuth();