const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


let ulEl = document.querySelector("#ingredients");
console.log(ulEl)

const colection = ingredients.map(ingredient => {
  const items = document.createElement("li")
  items.textContent = ingredient
  items.classList.add("item")
  ulEl.append(items)
});
 












