"use strict"
// Algorithm
// 1. type numbers in input by prompt
// 2. add input in [numbers]
// 3. repeat until cancel
// 4. count all elements in [numbers] by for / for ... of

let input;
const numbers = [];
// console.log(numbers)
let total = 0;
// console.log(total);

while (true) {
    input = prompt("Type a number");
    if (input === null) {
        console.log("Canceled by user, give result:");
        break;
    }
    input = Number(input);
    const notNumber = Number.isNaN(input);
    if (notNumber) {
        alert("Dont save this iteration, please, enter a number!");
        continue;
    }
    // total += input;
    console.log("Saved this iteration!");
    numbers.push(input);
    console.log(numbers);
}

if (numbers.length !== 0) {
    for (const number of numbers) {
        total += number
        // console.log(total);
    }

}
console.log(`Общая сумма чисел равна ${total}`);
alert(`Общая сумма чисел равна ${total}`);

// const arrayNumbers = numbers.push(input);
// console.log(arrayNumbers)