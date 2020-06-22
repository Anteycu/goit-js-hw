"use strict"
//Алгоритм 
//1.пишем функцию принимающую строку
// 2.пишем условие через иф
// 3.добавляя инклудсы спам и сэйл
// 4. задаем апперкейс и ловеркэйс
//  const checkWords = ["sale".toUpperCase(), "sale".toLowerCase(),
//      "spam".toUpperCase(), "spam".toLowerCase()];

// ==============================убил 5 часов, пробовал разные вариации - ничего не получилось==============
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

//============================попытка 2 с примером от Репеты(упрощенный вариант под 1 переменную) ===============
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
// ===========================вариант второй попытки 2 (еще минус 2 часа, ничего не понятно, но очень интересно =))===========================
const wordsToFind = ["sale", "[SPAM]"];
const checkForSpam = function (message) {
    const messageArray = message.split(" ");

    for (const findWord of wordsToFind) {
        let isInWord = messageArray.includes(findWord);
        if (isInWord) {
            return isInWord;
            // console.log(isInWord);
            // break;
        }
        // if (isInWord === isInWord) {
        //     return isInWord;
        //     console.log(isInWord);
        //     continue;
        // }
    }
    console.log("false");
    // return isInWord;

};

//Результат похож, но я уверен, должен быть способ выдать без консоли, подскажете?

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true