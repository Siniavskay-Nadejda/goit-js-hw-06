const inputEl = document.querySelector("#name-input");


const spanEl = document.querySelector("#name-output");


inputEl.addEventListener("input",onInputChenge);
 
function onInputChenge(event) {
    console.log(event.currentTarget.value) 
     spanEl.textContent = event.currentTarget.value
    
};