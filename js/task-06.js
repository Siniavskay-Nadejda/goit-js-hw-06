// const inputEl = document.querySelector("#validation-input")
// console.log(inputEl)

// inputEl.addEventListener("blur",onInputBlur)

// function onInputBlur(event) {
//     console.log("инпут потерял фокус,событие блур")
//     if (event.length === inputEl.dataset.length ) {
//       inputEl.classList.add("valid")
//     };
//     inputEl.classList.add("invalid")
//     return;
// };
const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  
  if (event.target.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
    return;
  }

  inputEl.classList.add('invalid');
  inputEl.classList.remove('valid');
  return;
}