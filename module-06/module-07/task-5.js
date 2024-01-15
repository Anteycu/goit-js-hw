"use strict";

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector("input#name-input");
const spanRef = document.querySelector("span#name-output");

inputRef.addEventListener("input", (e) => {
  if (e.target.value.length === 0) {
    spanRef.textContent = "Nезнакомец";
  } else {
    spanRef.textContent = e.target.value;
  }
});
