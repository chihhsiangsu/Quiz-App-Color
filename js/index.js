const darkModeButton = document.querySelector('[data-js="colorSwitch"]');
console.log(darkModeButton);
const body = document.querySelector('[data-js="body"]');
const cards = document.querySelectorAll('[data-js="card"]');

darkModeButton.addEventListener("click", () => {
  body.classList.toggle("body--dark");
  darkModeButton.classList.toggle("header__colorSwitch--dark");

  cards.forEach((card) => {
    card.classList.toggle("card--dark");
  });
});
