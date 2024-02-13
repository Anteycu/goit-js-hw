"use strict"

const logItems = function (array) {

    const arrayLength = array.length;

    for (let i = 0; i < arrayLength; i += 1) {

        console.log(`${i + 1} - ${array[i]}`);
    }
}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);