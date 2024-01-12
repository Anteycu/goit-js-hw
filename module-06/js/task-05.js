// отримуємо доступ
const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

// прописуємо іменований колбек
const inputHandler = (evt) => {
  const {
    currentTarget: { value: inputValue },
  } = evt;
  const isEmpty = inputValue.length;
  outputRef.textContent = isEmpty ? inputValue : "Anonymous";
};

// ставимо слухача
inputRef.addEventListener("input", inputHandler);
