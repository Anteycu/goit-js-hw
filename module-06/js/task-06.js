// отримуємо доступ
const inputRef = document.querySelector("#validation-input");

// прописуємо функціонал в іменному колбеку
const validationHandler = (event) => {
  const {
    currentTarget: { dataset, value },
  } = event;
  if (value.length >= dataset.length) {
    switcher("valid", "invalid");
    return;
  }
  switcher("invalid", "valid");
};

// створюємо службову функцію
function switcher(add, remove, elem = inputRef) {
  elem.classList.add(add);
  elem.classList.remove(remove);
}

// додаємо слухача
inputRef.addEventListener("blur", validationHandler);
