const counterValueRef = document.querySelector("#value");
let counterValue = Number(counterValueRef.textContent);

const incrementRef = document.querySelector('button[data-action="increment"]');
incrementRef.addEventListener("click", () => {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
});

const decrementRef = document.querySelector('button[data-action="decrement"]');
decrementRef.addEventListener("click", () => {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
});
