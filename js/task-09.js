const refs = {
  fieldBg: document.querySelector('.widget'),
  colorEl: document.querySelector('.color'),
  btnChange: document.querySelector('.change-color'),
}

refs.btnChange.addEventListener('click', getRandomHexColor)

function getRandomHexColor() {

  refs.fieldBg.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  refs.colorEl.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}