"use strict"
const products = [{
        name: 'Радар',
        price: 1300,
        quantity: 4
    },
    {
        name: 'Сканер',
        price: 2700,
        quantity: 3
    },
    {
        name: 'Дроид',
        price: 400,
        quantity: 7
    },
    {
        name: 'Захват',
        price: 1200,
        quantity: 2
    },
];
// ==============================проверять это=============
const getAllPropValues = function (arr, prop) {
    const findedValuesOfProps = [];
    for (let object of arr) {
        // console.log(arr);
        // console.log(prop);
        // findedValuesOfProps.push(object[prop]);
        if (object[prop] === undefined) {
            findedValuesOfProps;
        } else {
            findedValuesOfProps.push(object[prop]);
        }
    }
    return findedValuesOfProps;
};

// ===================не понятно поведение при таком условии======
// const getAllPropValues = function (arr, prop) {
//     const findedValuesOfProps = [];
//     for (let object of arr) {
//         // console.log(arr);
//         // console.log(prop);
//         // findedValuesOfProps.push(object[prop]);
//         if (object[prop] === false) {
//             return findedValuesOfProps;
//         } else {
//             return findedValuesOfProps.push(object[prop]);
//         }
//     }

//     return findedValuesOfProps;
// };


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []