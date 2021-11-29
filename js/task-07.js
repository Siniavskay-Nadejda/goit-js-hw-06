const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", onInputChenge);

function onInputChenge () {
    spanEl.style.fontSize = `${inputEl.value}px`;
};





