const inputEl = document.querySelector('#validation-input');
const charactersNumber = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', onCheckCharactersNumber)

function onCheckCharactersNumber(event) {
    //event.preventDefault();

    if (event.currentTarget.value.length === charactersNumber) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid'); 
    };
        
}
