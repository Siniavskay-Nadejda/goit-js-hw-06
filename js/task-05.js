const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

  inputEl.oninput = function () {
    if (inputEl.value === '') {
       spanEl.innerHTML = "Anonymous";
    } else{
    spanEl.innerHTML = inputEl.value;
    }
}