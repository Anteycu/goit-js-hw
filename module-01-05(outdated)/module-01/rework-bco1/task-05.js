// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
// Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.Обязательно используй switch.
// Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert
// сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

let delivInfo;
let country;
let price;

delivInfo = "Please, enter country";
const delivery = prompt(delivInfo);

if (delivery !== null) {
  switch (delivery) {
    case (country = "Китай"):
      price = 100;
      delivInfo = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
    case (country = "Чили"):
      price = 250;
      delivInfo = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
    case (country = "Австралия"):
      price = 170;
      delivInfo = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
    case (country = "Индия"):
      price = 80;
      delivInfo = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
    case (country = "Ямайка"):
      price = 120;
      delivInfo = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
    default:
      delivInfo = "Invalid country name";
  }
} else {
  delivInfo = "Canceled by user";
}
console.log(delivInfo);
