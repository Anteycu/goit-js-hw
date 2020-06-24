"use strict"
// Algorithm
// 1. 

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
// =========рабочий вариант, но хотелось бы обсудить, как избежать 3ех "No product"(помимо удалени элс)?=========
const calculateTotalPrice = function (allProdcuts, productName) {
    // const values = Object.entries(...allProdcuts);
    // console.log(values[1]);
    let sum;
    for (const obj of allProdcuts) {
        // console.log(object);
        // console.log(Object.values(object));
        if (Object.values(obj).includes(productName)) {
            sum = obj.price * obj.quantity;
            // console.log(values[0]);
            // console.log(values[2]);
        } else {
            console.log("No product");
        }
    }
    return sum;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800