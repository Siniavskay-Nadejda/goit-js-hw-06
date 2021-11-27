let counterValue = 0;

const buttonIncrementEl = document.querySelector("[data-action=increment]");
const velueEl = document.querySelector("#value");
const buttonDecrementEl = document.querySelector("[data-action=decrement]");

buttonIncrementEl.addEventListener("click", () => {
velueEl.textContent = counterValue += 1
});

buttonDecrementEl.addEventListener("click", () => {
velueEl.textContent=counterValue-=1
});