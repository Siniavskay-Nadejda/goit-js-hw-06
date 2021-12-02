function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

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
 
 let startSize = 30; 
function createBoxes(amount) { 
  
  let result = []; 
  for (let i = 0; i < amount; i += 1) {
    let size = startSize + i * 10;
    const box = document.createElement('div'); 
     startSize +=10
         
    box.style.width = `${size}px`; 
    box.style.height = `${size}px`; 
    box.style.background = `${getRandomHexColor()}`; 
     
    result.push(box);
    
  }; 
  boxesEl.append(...result); 
}; 

function destroyBoxes() { 
  boxesEl.innerHTML = ''; 
};
