const formRef = document.querySelector(".login-form");

const submitHandler = (evt) => {
  evt.preventDefault();
  const { target } = evt;
  const email = target.elements.email.value;
  const password = target.elements.password.value;

  if (!email || !password) {
    alert("Please, enter your email and password");
    return;
  }
  const user = {
    email,
    password,
  };

  printUserData(user);
  target.reset();
};

function printUserData(user) {
  console.log(user);
}

formRef.addEventListener("submit", submitHandler);
