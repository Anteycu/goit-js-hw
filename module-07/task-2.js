"use strict"

// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// В JS есть массив строк.

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит
// все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().

const liRef1 = document.createElement("li");
liRef1.textContent = ingredients[0];
console.log(liRef1)

const liRef2 = document.createElement("li");
liRef2.textContent = ingredients[1];
console.log(liRef2)

const liRef3 = document.createElement("li")
liRef3.textContent = ingredients[2]
console.log(liRef3)

const liRef4 = document.createElement("li")
liRef4.textContent = ingredients[3]
console.log(liRef4)

const liRef5 = document.createElement('li')
liRef5.textContent = ingredients[4]
console.log(liRef5)

const liRef6 = document.createElement("li")
liRef6.textContent = ingredients[5]
console.log(liRef6)

const liRefArr = ingredients.map(item => {
    const li = document.createElement("li")
    li.textContent = item;
    return li
})
console.log(liRefArr)

const ulRef = document.querySelector('#ingredients')
ulRef.append(...liRefArr)
console.log(ulRef)