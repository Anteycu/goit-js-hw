"use strict"
//Алгоритм 
//1.пишем функцию принимающую строку
// 2.пишем условие через иф
// 3.добавляя инклудсы спам и сэйл
// 4. задаем апперкейс и ловеркэйс

// // ==============================пробовал разные вариации - еще доделаю такой вариант позже==============
// const checkForSpam = function (message) {
//     const messageArray = message.split(" ");
//     const checkWords = ["sale".toUpperCase(), "sale".toLowerCase(),
//         "spam".toUpperCase(), "spam".toLowerCase()
//     ];
//     let checkWord;
//     for (checkWord of checkWords) {
//         // const checkWords = "sale";
//         if (messageArray.includes(checkWord)) {
//             console.log(messageArray.includes(checkWord));
//             return;
//         } else {
//             console.log(messageArray.includes(checkWord));
//         };
//     }
// }

//============================попытка 2 с примером от Репеты(упрощенный вариант под 1 проверочное слово) ===============
// const checkForSpam = function (message) {
//     const messageArray = message.split(" ");
//     let findWord = "sale";
//     for (const wordOfMessage of messageArray) {
//         if (findWord === wordOfMessage) {
//             return "true";
//         }
//     }
//     return "false";
// };
// ===========================вариант c ментором оптимизированный(проверять этот)===========================

const checkForSpam = function (message) {
    const modedMassage = message.toLowerCase();

    if (modedMassage.includes("[spam]") || modedMassage.includes("sale")) {
        return true;
    } else {
        return false;
    }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true