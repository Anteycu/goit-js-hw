"use strict"

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const inputRef = document.querySelector("input#name-input")
const spanRef = document.querySelector("span#name-output")
// let nameValue 
// spanRef.textContent = nameValue
// console.log(nameValue)

inputRef.addEventListener("input", (e) => {
    // nameValue = e.target.value
    spanRef.textContent = e.target.value
//  console.log(e.target.value)
});
// console.log(inputRef.value)

