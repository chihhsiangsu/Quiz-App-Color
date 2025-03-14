const darkModeButton = document.querySelector('[data-js="toggle-theme"]');
const body = document.querySelector('[data-js="body"]');
const cards = document.querySelectorAll('[data-js="card"]');
const heading = document.querySelector('[data-js="heading-toggle-theme"]');

darkModeButton.addEventListener("click", () => {
  body.classList.toggle("body--dark");
  darkModeButton.classList.toggle("header__colorSwitch--dark");

  cards.forEach((card) => {
    card.classList.toggle("card--dark");

    if (body.classList.contains("body--dark")) {
      darkModeButton.textContent = "Light Mode";
      heading.textContent = "=.=";
    } else {
      darkModeButton.textContent = "Dark Mode";
      heading.textContent = "QQ";
    }
  });
});
