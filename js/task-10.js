function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// const inputEl = document.querySelector("input")
// console.log(inputEl)

// const divContainer = document.querySelector("#boxes")
// console.log(divContainer)

// const btnEl = document.querySelectorAll("button")
// console.log(btnEl)

// btnEl[0].addEventListener("click", createBoxes)
// btnEl[1].addEventListener("click", destroyBoxes)


// function createBoxes(amount) {
//   let size = 30;
  
//  for (let i = 0; i < amount; i +=1) {
   
//    let div = document.createElement("div");
//   }
 

const inputEl = document.querySelector('input'); 
const createBtnEl = document.querySelector('button[data-create]'); 
const destroyBtnEl = document.querySelector('[data-destroy]'); 
const boxesEl = document.querySelector('#boxes'); 
 
createBtnEl.addEventListener('click', onCreateBtnRefClick); 
destroyBtnEl.addEventListener('click', destroyBoxes); 
 
function onCreateBtnRefClick() { 
  const amount = inputEl.value; 
  createBoxes(amount); 
}; 
 
 
function createBoxes(amount) { 
  const startSize = 30; 
  let result = []; 
  for (let i = 0; i < amount; i += 1) { 
    const box = document.createElement('div'); 
    const size = startSize + 10 * i; 
         
    box.style.width = `${size}px`; 
    box.style.height = `${size}px`; 
    box.style.background = `${getRandomHexColor()}`; 
     
    result.push(box);     
  }; 
  boxesEl.append(...result); 
}; 

function destroyBoxes() { 
  boxesEl.innerHTML = ''; 
}
