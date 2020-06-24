"use strict"
// =================нашел значение наибольшего выполнения задач, но не смог привязать к ключу для вывода=============
// const findBestEmployee = function (employees) {
//     const values = Object.values(employees);
//     console.log(values);

//     let coolestEmployee = values[0];
//     for (let i = 1; i < values.length; i += 1) {
//         if (coolestEmployee < values[i]) {
//             coolestEmployee = values[i];
//             // console.log(coolestEmployee);
//         }
//         // console.log(`highest score : ${coolestEmployee}`);
//         // console.log(value);
//     }
//     return (`highest score : ${coolestEmployee}`);
// };

// ===================вариант 2 (проверять это) догадался, что нужно использовать энтрис, но все равно окончательного понимания нет===================
const findBestEmployee = function (employees) {
    const values = Object.entries(employees);
    let name;
    let number = 0;
    // console.log(values);
    for (const value of values) {
        console.log(value);
        if (value[1] > number) {
            number = value[1];
            name = value[0];
        }
        console.log(`${value[1]} ${value[0]}`);
    }
    return (`${name} ${number}`);
}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux