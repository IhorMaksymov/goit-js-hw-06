const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach((ingredient) => {
  const item = document.createElement('li');
  item.classList.add('item');
  ingredientsList.appendChild(item);
  item.insertAdjacentHTML("beforeend",ingredient);
})