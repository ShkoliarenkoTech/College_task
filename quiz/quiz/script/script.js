document.addEventListener("DOMContentLoaded", function () {
  const btnOpenModal = document.querySelector("#btnOpenModal");
  const modalBlock = document.querySelector("#modalBlock");
  const closeModal = document.querySelector("#closeModal");
  const questionTitle = document.querySelector("#question");
  const formAnswers = document.querySelector("#formAnswers");


  const next = document.querySelector("#next");
  const prev = document.querySelector("#prev");

  const questions = [
    {
      question: "Какого цвета бургер?",
      answers: [
        {
          title: "Стандарт",
          url: "./image/burger.png",
        },
        {
          title: "Черный",
          url: "./image/burgerBlack.png",
        },
      ],
      type: "radio",
    },
    {
      question: "Из какого мяса котлета?",
      answers: [
        {
          title: "Курица",
          url: "./image/chickenMeat.png",
        },
        {
          title: "Говядина",
          url: "./image/beefMeat.png",
        },
        {
          title: "Свинина",
          url: "./image/porkMeat.png",
        },
      ],
      type: "radio",
    },
    {
      question: "Дополнительные ингредиенты?",
      answers: [
        {
          title: "Помидор",
          url: "./image/tomato.png",
        },
        {
          title: "Огурец",
          url: "./image/cucumber.png",
        },
        {
          title: "Салат",
          url: "./image/salad.png",
        },
        {
          title: "Лук",
          url: "./image/onion.png",
        },
      ],
      type: "checkbox",
    },
    {
      question: "Добавить соус?",
      answers: [
        {
          title: "Чесночный",
          url: "./image/sauce1.png",
        },
        {
          title: "Томатный",
          url: "./image/sauce2.png",
        },
        {
          title: "Горчичный",
          url: "./image/sauce3.png",
        },
      ],
      type: "radio",
    },
  ];




  btnOpenModal.addEventListener("click", () => {
    modalBlock.classList.add("d-block");
    playTest();
  });

  closeModal.addEventListener("click", () => {
    modalBlock.classList.remove("d-block");
  });

  const playTest = () => {
let questionNumber = 0;

    const renderAnswers = (indexQuestion) => {
      questions[indexQuestion].answers.forEach((answer) => {
        const answerItem = document.createElement("div");

        answerItem.classList.add("answers-item", "d-flex", "flex-column");

        answerItem.innerHTML = `
            <input type="${questions[indexQuestion].type}" id="${answer.title}" name="answer" class="d-none">
            <label for="answerItem1" class="d-flex flex-column justify-content-between">
              <img class="answerImg" src=${answer.url} alt="burger">
              <span>${answer.title}</span>
            </label>
            </div>
        `;
        formAnswers.appendChild(answerItem);
    });
  };
  const renderQuestions = (indexQuestion) => {
    if (questionNumber < 1) {
      next.classList.remove("hide");
      prev.classList.add("hide");
    } else if (
      questionNumber > 0 &&
      questionNumber === questions.length - 1
    ) {
      next.classList.add("hide");
      prev.classList.remove("hide");
    } else if (questionNumber > 0) {
      next.classList.remove("hide");
      prev.classList.remove("hide");
    }

    formAnswers.innerHTML = "";
    questionTitle.textContent = `${questions[indexQuestion].question}`;
    renderAnswers(indexQuestion);
  };
  renderQuestions(questionNumber);

  next.onclick = () => {
    questionNumber++;
    renderQuestions(questionNumber);
  };
  prev.onclick = () => {
    questionNumber--;
    renderQuestions(questionNumber);
    };
    renderQuestions();
  };
});