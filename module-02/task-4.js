"use strict"
//Алгоритм
// 1. написать функцию со строкой
// 2. определить число сиволов
// 6. создать условие по длине символов, если < 40 то возвращаем исходник
// 3. если символов > 40, то обрезаем исходник до 40 ка
// 4. добавляем к обрезку...
// 5. возвращаем функцию

// ==============мой вариант=======================
// const formatString = function (string) {
//     let symbols = string.length;
//     // symbols = Number(symbols);
//     console.log(symbols)
//     if (symbols > 40) {
//         // console.log(string.slice(0, 40));
//         const shortCutArr = string.slice(0, 40).split("");
//         // console.log(shortCutArr);
//         shortCutArr.push('...');
//         console.log(shortCutArr.join(""));
//         return;
//     } else {
//         console.log(string);
//     }
// };

// ============================оптимизированный вариант ментора====================
const formatString = function (string) {
    let result;
    if (string.length < 40) {
        result = string;
    } else {
        result = string.slice(0, 40) + "...";
    }
    return result
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
    formatString(
        'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
);
// вернется форматированная строка