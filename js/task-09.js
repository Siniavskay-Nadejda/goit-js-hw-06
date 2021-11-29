function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const textEl = document.querySelector(".color");

const buttonEl = document.querySelector(".change-color");

buttonEl.addEventListener("click", changeolor);

function changeolor(){
  document.body.style.backgroundColor = getRandomHexColor()
textEl.textContent = getRandomHexColor()
};
