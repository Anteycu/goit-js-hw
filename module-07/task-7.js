"use strict"
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и 
// изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании 
// ползунка будет меняться размер текста.

/* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */

const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text")
console.log(inputRef.value)
spanRef.style.fontSize = `${inputRef.value}px`

inputRef.addEventListener("input", (e) => {
    spanRef.style.fontSize = `${e.target.value}px`
    console.log(spanRef.style.fontSize)
});