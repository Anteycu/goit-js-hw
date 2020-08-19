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
// } else if (ordered <= 0) {
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

// systemInfo = "Please, enter quantity of repair droids";
// const quantityOfDroids = prompt(systemInfo);
// const isquantityOfDroids = isNaN(quantityOfDroids);

// if (quantityOfDroids !== null) {
//     if (isquantityOfDroids) {
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

// if (delivery !== null) {
//   switch (delivery) {
//     case (country = "Китай"):
//       price = 100;
//       delivInfo = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;
//     case (country = "Чили"):
//       price = 250;
//       delivInfo = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;
//     case (country = "Австралия"):
//       price = 170;
//       delivInfo = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;
//     case (country = "Индия"):
//       price = 80;
//       delivInfo = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;
//     case (country = "Ямайка"):
//       price = 120;
//       delivInfo = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;
//     default:
//       delivInfo = "Invalid country name";
//   }
// } else {
//   delivInfo = "Canceled by user";
// }
// console.log(delivInfo);

// ===========================hw-1-6=====================================

// ========================вариант по примеру из вебинара Репеты====================
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

// ================================Вариант без континью и с более сложным иф условием===========
// let total = 0;

// do {
//   let userInput = prompt("Please, enter number");
//   if (userInput === null) {
//     break;
//   }
//   userInput = Number(userInput);

//   const notNumber = Number.isNaN(userInput);

//   if (notNumber !== false) {
//     alert("Please, enter a number!");
//   } else total += userInput;
// } while (true);

// alert(`Общая сумма чисел равна ${total}`);
