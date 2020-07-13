"use strict"

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса// Это куда и зачем еще добавлять слушателей?

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

const counterValueRef = document.querySelector("#value")
let counterValue = Number(counterValueRef.textContent)
// console.log(counterValue)

const incrementRef = document.querySelector('button[data-action="increment"]');
incrementRef.addEventListener("click", () => {
    counterValue += 1
    counterValueRef.textContent = counterValue
})
// console.log(incrementRef)

const decrementRef = document.querySelector('button[data-action="decrement"]')
decrementRef.addEventListener("click", () => {
    counterValue -= 1
    counterValueRef.textContent = counterValue
})
// console.log(decrementRef)