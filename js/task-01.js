const categoriesItem = document.querySelector('#categories');

const numderItem = categoriesItem.children.length;

console.log(`Number of categories: ${numderItem}`)



const all = categoriesItem.querySelectorAll('.item');

const title = all.forEach((element) => {
    console.log('Category:', element.querySelector('h2').textContent);
    console.log('Elements:', element.querySelector('ul').children.length);
});