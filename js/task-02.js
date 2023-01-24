const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const makeIngredient = ingredient => {
  const ingredientEl = document.createElement('li');

  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add('item');

  return ingredientEl;
}

const ingredientsItem = ingredients.map(makeIngredient);

ingredientsEl.append(...ingredientsItem);