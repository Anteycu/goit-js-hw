const products1 = [
  {
    name: "Радар",
    price: 1300,
    quantity: 4,
  },
  {
    name: "Сканер",
    price: 2700,
    quantity: 3,
  },
  {
    name: "Дроид",
    price: 400,
    quantity: 7,
  },
  {
    name: "Захват",
    price: 1200,
    quantity: 2,
  },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  let sum;
  for (const obj of allProdcuts) {
    if (Object.values(obj).includes(productName)) {
      sum = obj.price * obj.quantity;
    }
  }
  return sum;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products1, "Радар")); // 5200

console.log(calculateTotalPrice(products1, "Дроид")); // 2800
