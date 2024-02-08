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
