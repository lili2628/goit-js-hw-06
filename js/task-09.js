function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;
const btnChangeBodyColorEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');

btnChangeBodyColorEl.addEventListener('click', onBtnChangeBodyColor);

function onBtnChangeBodyColor() {
  const colorRandom = getRandomHexColor();
  bodyEl.style.backgroundColor = colorRandom;
  textEl.textContent = colorRandom;
}
