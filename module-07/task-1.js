"use strict";

// В HTML есть список категорий ul#categories.
// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента
// (тега h2) и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const categoriesRef = document.querySelectorAll("li.item").length;
console.log(`В списке ${categoriesRef} категории.`);

const titleRef = document.querySelectorAll("h2").forEach((item) => {
  console.log(`Категория: ${item.innerText}`);
  console.log(
    `Количество элементов: ${item.nextElementSibling.children.length}`
  );
});
