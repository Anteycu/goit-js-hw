"use strict"
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputRef = document.querySelector("#validation-input")
console.log(inputRef)

const numLemght = inputRef.dataset.lenght// такого метода просто нет, по этому андефайнд?
console.log(numLemght)

inputRef.addEventListener("change", (e) => {
    if (e.target.value.length === 6) {
        e.target.classList.add("valid")
        e.target.classList.remove("invalid")
    } else {
        e.target.classList.add("invalid")
        e.target.classList.remove("valid")//как можно упростить эдд и ремув на одну строчку, естьспособ?
    }
})
