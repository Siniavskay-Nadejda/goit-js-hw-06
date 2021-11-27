const inputEl = document.querySelector("#validation-input")
console.log(inputEl)

inputEl.addEventListener("blur",onInputBlur)

function onInputBlur(event) {
    console.log("инпут потерял фокус,событие блур")
    if (event.length === 6) {
     inputEl.borde   
    }
}
