// отримуємо доступ
const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

// додаємо слухача
inputRef.addEventListener("input", onInput);

// пишемо іменований колбек
function onInput(evt) {
  const {
    currentTarget: { value: inputValue },
  } = evt;
  outputRef.textContent = inputValue.length ? inputValue : "Anonymous";
}
