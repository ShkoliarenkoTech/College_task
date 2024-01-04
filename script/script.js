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

const cardsRestaurants = document.querySelector(".food__cards");
const containerPromo = document.querySelector(".wrapper__promo");
const restaurants = document.querySelector(".restaurants");
// const menu = document.querySelector(".");
const logo = document.querySelector(".logo");
const cardsMenu = document.querySelector(".cards__menu");

let login = localStorage.getItem("pizzaAuth");

function toggleAuthModal() {
  authModal.classList.toggle("is-open");
  loginInput.style.borderColor = "";
  if (authModal.classList.contains("is-open")) {
    disableScroll();
  } else {
    enableScroll();
  }
}

function clearForm() {
  loginInput.style.borderColor = "#ff0000";
  loginForm.reset();
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
    event.preventDefault();if (loginInput.value.trim()) {
      login = loginInput.value;
      localStorage.setItem("pizzaAuth", login);
      toggleAuthModal();
      authButton.removeEventListener("click", toggleAuthModal);
      authClose.removeEventListener("click", toggleAuthModal);
      loginForm.removeEventListener("submit", logIn);
      loginForm.reset();
      checkAuth();
    } else {
      loginInput.style.borderColor = "#ff0000";
      loginInput.value = "";
    }
  }

  authButton.addEventListener("click", toggleAuthModal);
  authClose.addEventListener("click", toggleAuthModal);
  loginForm.addEventListener("submit", logIn);
  authModal.addEventListener("click", function (event) {
    if (event.target.classList.contains("is-open")) {
      toggleAuthModal();
    }
  });
}

authButton.addEventListener("click", clearForm);

function checkAuth() {
  if (login) {
    authorized();
  } else {
    notAuthorized();
  }
}

checkAuth();

function createCardRestaurant() {
  const card = `
            <div class="food__card animate__animated animate__fadeInUp delay-1">
                <img src="./images/card-2.png" alt="card-2" class="card__thumb">
                <div class="card__info">
                    <div class="info__title">
                        <h2>Тануки</h2>
                        <span>40 мин</span>
                    </div>
                    <div class="info__additional">
                        <span class="additional__rating">4.7</span>
                        <span class="additional__price">От 1000 ₽</span>
                        <ul class="additional__food">
                            <li><span>Пицца и суши</span></li>
                        </ul>
                    </div>
                </div>
            </div>
  `;

  cardsRestaurants.insertAdjacentHTML("beforeend", card);
}

const openGoods = (event) => {
  const target = event.target;

  const restaurant = target.closest(".food__card");

  if (restaurant) {
    containerPromo.classList.add("hide");
    restaurants.classList.add("hide");
    // menu.classList.remove("hide");
  }

  cardsMenu.textContent = "";

  createCardGood();
  createCardGood();
  createCardGood();
  createCardGood();
};

createCardRestaurant();
createCardRestaurant();

function createCardGood() {
  const card = document.createElement("div");
  card.className = "food__card";
  card.insertAdjacentHTML(
    "beforeend",
    `
        <img src="./images/imagerestaurant-card-1.png" alt="card-1" class="card__thumb">
        <div class="menu-card__info">
            <div class="menu-info__title">
                <h2>Ролл угорь стандарт</h2>
                <h3>Рис, угорь, соус унаги, кунжут, водоросли нори.</h3>
            </div>
            <div class="info__additional">
                <button class="btn-incart">В корзину <img src="./images/icons/incart-icon.svg" alt="incart"></button>
                <span class="card-additional__price">250 ₽</span>
            </div>
        </div>
  `
  );

  cardsMenu.insertAdjacentElement("beforeend", card);
}

cardsRestaurants.addEventListener("click", openGoods);
logo.addEventListener("click", function () {
  containerPromo.classList.remove("hide");
  restaurants.classList.remove("hide");
  // menu.classList.add("hide");
});