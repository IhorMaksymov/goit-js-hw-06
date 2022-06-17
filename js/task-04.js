const refs = {
    incrementBtn: document.querySelector('button[data-action="increment"]'),
    decrementBtn: document.querySelector('button[data-action="decrement"]'),
    value: document.querySelector('#value'),
}

let counterValue = 0;

const increment = () => {
    
    counterValue += 1;
    refs.value.textContent = counterValue
    
}

refs.incrementBtn.addEventListener('click', increment)

const decrement = () => {
    
    counterValue -= 1;
    refs.value.textContent = counterValue
    
}

refs.decrementBtn.addEventListener('click', decrement)






