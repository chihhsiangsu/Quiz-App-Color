const form = document.querySelector('[data-js="card__form"]');
const inputQuizQuestion = document.querySelector("#add-question");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const question = formData.get("addQuestion");

  const data = Object.fromEntries(formData);

  console.log(question);
  console.log(data);

  const container = document.querySelector("main");
  const newSection = document.createElement("section");
  newSection.className = "card";

  newSection.innerHTML = `  
  <h2 class="card__question">${data.addQuestion}</h2>
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
  `;

  container.append(newSection);
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
