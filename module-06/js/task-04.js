// отримуємо доступ до елементів
const counterWrap = document.querySelector("#counter");
const counterWrapChildren = [...counterWrap.children];
const decrementButton = counterWrapChildren.find(
  (elem) => elem.dataset.action === "decrement"
);
const incrementButton = counterWrapChildren.find(
  (elem) => elem.dataset.action === "increment"
);
const counterSpan = counterWrapChildren.find((elem) => elem.id === "value");

// додаємо слухачів на кнопки
decrementButton.addEventListener("click", decrementHandler);
incrementButton.addEventListener("click", incrementHandler);

// створюємо змінну для зберігання значення лічильника
let counterValue = 0;

// створюємо іменовані колбеки обробки слухачів
function decrementHandler() {
  counterValue -= 1;
  printCounterValue(counterValue);
}
function incrementHandler() {
  counterValue += 1;
  printCounterValue(counterValue);
}

// створюємо допоміжну функцію
function printCounterValue(num) {
  counterSpan.textContent = num;
}
