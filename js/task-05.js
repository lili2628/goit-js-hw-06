const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const name = outputEl.textContent;

inputEl.addEventListener('input', (event) => {
    outputEl.textContent = event.currentTarget.value;
    if (outputEl.textContent === '') {
        outputEl.textContent = 'Anonymous';
    }
} )