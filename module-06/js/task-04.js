// отримуємо доступ до лічильника
const counterWrap = document.querySelector("#counter");
console.dir(counterWrap);

// створюємо змінну для зберігання значення лічильника
let counterValue = 0;

// отримуємо доступ до кнопок
const counterWrapChildren = [...counterWrap.children];
console.dir(counterWrapChildren);
const decrementButton = counterWrapChildren.find(
  (elem) => elem.dataset.action === "decrement"
);
console.dir(decrementButton);
const incrementButton = counterWrapChildren.find(
  (elem) => elem.dataset.action === "increment"
);

// отримуємо доступ до спану зі значенням
const counterSpan = counterWrapChildren.find((elem) => elem.id === "value");
console.dir(counterSpan);

// створюємо іменовані колбеки для слухачів
const decrementHandler = () => {
  counterValue -= 1;
  counterSpan.textContent = counterValue;
};
const incrementHandler = () => {
  counterValue += 1;
  counterSpan.textContent = counterValue;
};

// розставляємо слухачів на кнопки
decrementButton.addEventListener("click", decrementHandler);
incrementButton.addEventListener("click", incrementHandler);
