const inputEl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text')

inputEl.addEventListener('input', inputFontSize);

function inputFontSize(event) {
    spanText.style.fontSize = `${event.currentTarget.value}px`; 
}



