const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const formData = {
        email: formElements.email.value,
        password: formElements.password.value,
    };


  if (formData.email === '' || formData.password === '') {
    return alert("Please fill in all the fields!");
  }

    console.log(formData);
    event.currentTarget.reset();

}
