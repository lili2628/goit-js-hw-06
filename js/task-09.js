function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;
const btnChangeBodyColorEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');

btnChangeBodyColorEl.addEventListener('click', onBtnChangeBodyColor);

function onBtnChangeBodyColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  textEl.textContent = getRandomHexColor();
}
