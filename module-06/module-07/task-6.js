"use strict";
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector("#validation-input");

const numLemght = inputRef.dataset.lenght;

inputRef.addEventListener("change", (e) => {
  if (e.target.value.length === 6) {
    classSwitcher("valid", "invalid", e.target);
  } else {
    classSwitcher("invalid", "valid", e.target); //как можно упростить эдд и ремув на одну строчку, естьспособ?
  }
});

function classSwitcher(classToAdd, classToRemove, target) {
  target.classList.add(`${classToAdd}`);
  target.classList.remove(`${classToRemove}`);
}
