const refs = {
  controlsEl: document.querySelector('#controls'),
  inputEl: document.querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  boxesEl: document.querySelector('#boxes'),
}

refs.btnCreate.addEventListener('click', createBoxes)
refs.btnDestroy.addEventListener('click', destroyBoxes)

function createBoxes(amount) {
  amount = Number(refs.inputEl.value);
  let width = 30;
  let height = 30;
  
  for (let i = 1; i <= amount; i += 1) {
    let box = document.createElement('div');
    box.classList.add('box');
    refs.boxesEl.appendChild(box);
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${width += 10}px`;
    box.style.height = `${height += 10}px`;
  }
}

function destroyBoxes() {
  while (refs.boxesEl.firstChild) {
    refs.boxesEl.removeChild(refs.boxesEl.firstChild);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}