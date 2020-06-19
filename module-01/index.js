"use strict";

// ============================hw-1-1==================================
// const name = 'Генератор защитного поля';
// let price = '1000';

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// price = '2000'

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// ===========================hw-1-2===================================
// const total = 100;
// const ordered = 30;

// if (total < ordered) {
//     console.log('Do not enough products!');
// }
// if (ordered <= 0) {
//     console.log('You should to write quantity');
// } else {
//     console.log('Order created, our manager call you');
// }

// ===========================hw-1-3===================================

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// const userPassword = prompt(message);
// message = 'Please, enter your password';

// if (userPassword === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать';

// } else if (userPassword !== null) {
//     message = 'Доступ запрещен, неверный пароль';

// } else {
//     message = 'Отменено пользователем';
// }
// alert(message);

// ===========================hw-1-4===================================

// const credits = 23580;
// const pricePerDroid = 3000;
// let systemInfo;
// let totalPrice;
// let balance;

// const quantityOfDroids = prompt(systemInfo);
// systemInfo = "Please, enter quantity of repair droids";
// const isquantityOfDroids = isNaN(quantityOfDroids);

// // =====================================================
// // if (quantityOfDroids !== isNaN) {
// // systemInfo = "Please, enter quantity in numbers"; - Это не работает так как були пришли или я мог это применить?
// // =====================================================

// if (quantityOfDroids !== null) {
//     if ((quantityOfDroids !== null) && isquantityOfDroids) {
//         systemInfo = "Please, enter quantity in numbers";
//     } else {
//         totalPrice = quantityOfDroids * pricePerDroid;
//         balance = credits - totalPrice;
//         systemInfo = totalPrice > credits ? 'Недостаточно средств на счету!' : `Сумма Вашего заказа ${totalPrice}, на счету осталось ${balance} кредитов.`;
//     }
// } else {
//     systemInfo = 'Отменено пользователем';
// }
// console.log(systemInfo);

// ===========================hw-1-5===================================

// let delivInfo;
// let country;
// let price;

// delivInfo = "Please, enter country";
// const delivery = prompt(delivInfo);

// // Почему в такой последовательности промт не подписывается информацией в дэливИнфо, а работает только как прописал выше ?
// //     В предыдущем задании работало и в такой последовательности как ниже.
// // const delivery = prompt(delivInfo);
// // delivInfo = "Please, enter country";

// if (delivery !== null) {
//     switch (delivery) {
//         case country = "Китай":
//             price = 100;
//             delivInfo = `Доставка в ${country} будет стоить ${price} кредитов`;
//             break;
//         case country = "Чили":
//             price = 250;
//             delivInfo = `Доставка в ${country} будет стоить ${price} кредитов`;
//             break;
//         case country = "Австралия":
//             price = 170;
//             delivInfo = `Доставка в ${country} будет стоить ${price} кредитов`;
//             break;
//         case country = "Индия":
//             price = 80;
//             delivInfo = `Доставка в ${country} будет стоить ${price} кредитов`;
//             break;
//         case country = "Ямайка":
//             price = 120;
//             delivInfo = `Доставка в ${country} будет стоить ${price} кредитов`;
//             break;
//         default:
//             delivInfo = "Invalid country name"
//     }
// } else {
//     delivInfo = "Canceled by user";
// }
// console.log(delivInfo);

// ===========================hw-1-6=====================================
// ========================попытка сам==================
// input = Number(input);
// if (input !== null) {
//     total += input;
//     console.log(input);
// } else {
//     alert('Было введено не число, попробуйте еще раз');
// }

// ========================с Репетой (проверяйте это)====================
// Алгоритм //
// 1 - создать цикл
// 2 - если null то остановить цикл
// 3 - если не null(преобразовать в число) добавить в тотал
// 4 - после цикла вывести результат общую сумму в алерт

let total = 0;

do {
    let userInput = prompt("Please, enter number!");
    if (userInput === null) {
        console.log("Canceled by user, take your result!");
        break;
    }
    userInput = Number(userInput);

    const notNumber = Number.isNaN(userInput);

    if (notNumber) {
        alert("Dont save this iteration, please, enter a number!");
        continue;
    }

    total += userInput;
    console.log("Saved this iteration!");

} while (true);

alert(`Sum of numbers = ${total}`);

// ========================================================================
// Попытка без континью и с более сложным иф условием, но понял, что там буль, получилось только заменить на элсе.
// let total = 0;

// do {
//     let userInput = prompt("Please, enter number");
//     if (userInput === null) {
//         break;
//     }
//     userInput = Number(userInput);

//     const notNumber = Number.isNaN(userInput);

//     if (notNumber !== false) {
//         alert("Please, enter a number!")
//     } else total += userInput;

// } while (true);

// alert(`Общая сумма чисел равна ${total}`);

// =============================================================================
// Вариант с внешним условием//null = 0 не прервется
// const total = 0
// let userInput;
// do {
//     userInput = prompt("Please, enter number");
//     userInput = Number(userInput);

// } while (userInput !== null);

// ===================================================================================