// const form = document.querySelector(".login-form");
// console.log(form)

// form.addEventListener("submit", handleSubmit);


// function handleSubmit(event) {
//   event.preventDefault();
//   const formElement = event.currentTarget.value;
//   const email = formElement.email.value
//   const password = formElement.password.value
//   const formdata = {email ,password}

//   if (email.value === "" || password.value === "") {
//     return alert("Please fill in all the fields!");
//   }
//  console.log(formdata)
//   event.currentTarget.reset();
// }


const form = document.querySelector(".login-form");
console.log(form)

form.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: {email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
console.log({
    email: email.value,
    password: password.value,
  });
  event.currentTarget.reset();
}
