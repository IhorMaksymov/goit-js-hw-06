const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const numberLength = Number(event.currentTarget.dataset.length);
    const inputLength = Number(event.currentTarget.value.length);

    if (inputLength !== numberLength) {
        input.classList.add('invalid');
        input.classList.remove('valid')
    } else if (inputLength === numberLength) {
        input.classList.toggle('valid');
        input.classList.remove('invalid')
    }
}