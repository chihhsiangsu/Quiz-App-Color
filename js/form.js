const form = document.querySelector('[data-js="card__form"]');
const inputQuizQuestion = document.querySelector("#add-question");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  //const question = formData.get("addQuestion");
  const data = Object.fromEntries(formData);

  //console.log(question);
  //console.log(data);

  const container = document.querySelector("main");
  const newSection = document.createElement("section");
  newSection.className = "card";

  newSection.innerHTML = `  
  <h2 class="card__question">${data.addQuestion}</h2>
  <button class="card__bookmark" data-js="bookmark-toggle">
    <img src="./assets/heartone.png" alt="heart" data-js="bookmark-image" />
  </button>
  <button class="card__answerclick">Show answer</button>
  <p class="card__answer">${data.addAnswer}</p>
  <article>
    <button class="cardtag">#${data.addHashtag}</button>
  </article>
  `;
  container.append(newSection);

  const showAnswerButton = document.querySelector(".card__answerclick");
  const cardAnswer = document.querySelector(".card__answer");
  const textAnswerClickButton = document.querySelector(".card__answerclick");

  showAnswerButton.addEventListener("click", () => {
    cardAnswer.classList.toggle("card__answer--reveal");

    if (cardAnswer.classList.contains("card__answer--reveal")) {
      textAnswerClickButton.textContent = "Hide Answer";
    } else {
      textAnswerClickButton.textContent = "Show Answer";
    }
  });
});

const questionInput = document.querySelector('[data-js="add-question"]');
const questionInputLeft = document.querySelector(
  '[data-js="question-counter"]'
);
const maxQuestionLength = questionInput.maxLength;

questionInput.addEventListener("input", () => {
  const remaining =
    maxQuestionLength - questionInput.value.length + " characters left";
  questionInputLeft.textContent = remaining;
});

const answerInput = document.querySelector('[data-js="add-answer"]');
const answerInputLeft = document.querySelector('[data-js="answer-counter"]');
const maxAnswerLength = answerInput.maxLength;

answerInput.addEventListener("input", () => {
  const remaining =
    maxAnswerLength - answerInput.value.length + " characters left";
  answerInputLeft.textContent = remaining;
});

const hashtagInput = document.querySelector('[data-js="add-hashtag"]');
const hashtagInputLeft = document.querySelector('[data-js="hashtag-counter"]');
const maxHashtagLength = hashtagInput.maxLength;

hashtagInput.addEventListener("input", () => {
  const remaining =
    maxHashtagLength - hashtagInput.value.length + " characters left";
  hashtagInputLeft.textContent = remaining;
});

/*

<section class="card" data-js="card">
  <h2 class="card__question">What percentage of tears are made up of water?</h2>
  <button class="card__bookmark" data-js="bookmark-toggle">
    <img src="./assets/heartone.png" alt="heart" data-js="bookmark-image" />
  </button>
  <button class="card__answerclick">Show answer</button>
  <p class="card__answer">90%</p>
  <article>
    <button class="cardtag">#fun</button>
    <button class="cardtag">#human</button>
    <button class="cardtag">#emotion</button>
  </article>
</section>;

*/
