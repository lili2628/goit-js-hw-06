
const listOfCategories = document.querySelector('#categories');
const numberOfCategories = listOfCategories.children.length;

console.log(`Number of categories: ${numberOfCategories}`);

const categories = document.querySelectorAll('.item');

categories.forEach(category => {
    const categoryName = category.firstElementChild.textContent;
    const numberOfCategoryItems = category.lastElementChild.children.length;
    
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${numberOfCategoryItems}`);
});


