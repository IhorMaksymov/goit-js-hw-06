const refs = {
    formEl: document.querySelector('.login-form'),
}

refs.formEl.addEventListener('submit', onFormSubmit)


function onFormSubmit(event) {
    event.preventDefault();

    const mail = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    const formData = {
        mail,
        password,
    }

    if (mail === '') {
        alert(`не заполнено поле Email`)
    } else if (password === '') {
        alert(`не заполнено поле Password`)
    }

    refs.formEl.reset();

    console.log(formData);
}