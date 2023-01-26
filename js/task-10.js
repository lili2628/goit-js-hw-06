function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector('#boxes');
const boxesNumberEl = document.querySelector('#controls > input');
const btnCreateBox = document.querySelector('[data-create]');
const btnDestroyBox = document.querySelector('[data-destroy]');

let numberEl = Number(boxesNumberEl.value);

boxesNumberEl.addEventListener('click', () => {
 numberEl = Number(boxesNumberEl.value);
})

btnCreateBox.addEventListener('click', () => {
  boxesEl.innerHTML = '';

  return createBoxes(numberEl);
});

function createBoxes(amount) {
  const divSet = [];

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    const divSize = 30 + 10 * i;
    const colorRandom = getRandomHexColor();

    divEl.style.backgroundColor = colorRandom;
    divEl.textContent = colorRandom;
    divEl.style.width = `${divSize}` + 'px';
    divEl.style.height = `${divSize}` + 'px';

    divSet.push(divEl);
  }

  boxesEl.append(...divSet);
}

btnDestroyBox.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesEl.innerHTML = '';
  boxesNumberEl.value = 0;
  numberEl = 0;
}