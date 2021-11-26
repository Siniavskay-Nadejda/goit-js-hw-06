const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemEl1 = document.createElement("li");
itemEl1.classList.add("item");
itemEl1.textContent = 'Potatoes';

const ulEl = document.querySelector("#ingredients");
ulEl.appendChild(itemEl1);


const itemEl2 = document.createElement("li");
itemEl2.classList.add("item");
itemEl2.textContent = 'Mushrooms';
ulEl.appendChild(itemEl2);


const itemEl3 = document.createElement("li");
itemEl3.classList.add("item");
itemEl3.textContent = 'Garlic';
ulEl.appendChild(itemEl3);


const itemEl4 = document.createElement("li");
itemEl4.classList.add("item");
itemEl4.textContent = 'Tomatos';
ulEl.appendChild(itemEl4);


const itemEl5 = document.createElement("li");
itemEl5.classList.add("item");
itemEl5.textContent = 'Herbs';
ulEl.appendChild(itemEl5);


const itemEl6 = document.createElement("li");
itemEl6.classList.add("item");
itemEl6.textContent = 'Condiments';
ulEl.appendChild(itemEl6);









