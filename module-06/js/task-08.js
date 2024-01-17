const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const {
    email: { value: email },
    password: { value: password },
  } = evt.currentTarget.elements;

  if (!email || !password) {
    alert("Please, enter your email and password");
    return;
  }

  const user = {
    email,
    password,
  };
  printUserData(user);

  evt.currentTarget.reset();
}

function printUserData(user) {
  console.log(user);
}
