const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');

const ingredientsArray = ingredients.map((ingredient) => {
  const itemLi = document.createElement('li');
  itemLi.classList.add('item');
  itemLi.textContent = ingredient;
  return itemLi;
})

ingredientsList.append(...ingredientsArray)