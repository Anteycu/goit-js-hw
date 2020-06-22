"use strict"

let i; // эту перменную разве обязательно объявлять?
const logItems = function (array) {
    for (const argument of arguments) {
        for (i = 0; i < arguments.length; i += 1) {
            const redet = i + 1;
            const results = [];
            results.push(`${redet} - ${argument[i]}`);
            console.log(results);
        }
    }
}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);