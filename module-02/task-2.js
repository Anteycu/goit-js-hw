"use strict"

// Результат на выходе правильный считает, но постоянно в паре с undefined, почему?
const calculateEngravingPrice = function (message, pricePerWord) {
    const sentence = message.split(" ");
    message = sentence.length;
    // pricePerWord = Number.pricePerWord; - NaN почему, разве он не преобразовывает в число?
    const totalCost = message * pricePerWord;
    console.log(totalCost);
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
    calculateEngravingPrice(
        'Proin sociis natoque et magnis parturient montes mus',
        10,
    ),
); // 80

console.log(
    calculateEngravingPrice(
        'Proin sociis natoque et magnis parturient montes mus',
        20,
    ),
); // 160

console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120