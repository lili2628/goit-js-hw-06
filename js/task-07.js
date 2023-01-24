const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

// дописала наступний рядок, бо дуже дивно виглядало, 
//коли тягнути повзунок вліво, а текст збільшувався,
// тобто початкове положення повзунка не відповідало 
//початковому розміру шрифта
textEl.style.fontSize = inputEl.value + 'px';

inputEl.addEventListener('input', onChangeTextSize);

function onChangeTextSize(event) {
    //event.preventDefault();
    textEl.style.fontSize = event.currentTarget.value + 'px'; 
    
}

