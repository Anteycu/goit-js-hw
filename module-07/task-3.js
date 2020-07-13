"use strict"

// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки 
// используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [{
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];


const galleryRef = document.querySelector("#gallery")
const fragment = document.createDocumentFragment();
// ===============================таким путем отображалось без вложения в лишки=================
// const itemsGalleryRef1 = document.createElement("li");
// const imgGalleryRef1 = document.createElement('img');
// imgGalleryRef1.setAttribute("url", images[0].url);
// imgGalleryRef1.setAttribute("alt", images[0].alt);
// // console.log(imgGalleryRef1)

// const itemsGalleryRef2 = document.createElement('li');
// const imgGalleryRef2 = document.createElement('img');
// imgGalleryRef2.setAttribute('url', images[1].url);
// imgGalleryRef2.setAttribute("alt", images[1].alt);
// // console.log(imgGalleryRef2)

// const itemsGalleryRef3 = document.createElement('li');
// const imgGalleryRef3 = document.createElement('img');
// imgGalleryRef3.setAttribute('url', images[2].url);
// imgGalleryRef3.setAttribute("alt", images[2].alt);
// // console.log(imgGalleryRef3)

// ===========================вот тут часть вложения имг в ли, и она не срабатывает, почему?==============
// const fragment1 = itemsGalleryRef1.appendChild(imgGalleryRef1);
// const fragment2 = itemsGalleryRef2.appendChild(imgGalleryRef2);
// const fragment3 = itemsGalleryRef3.appendChild(imgGalleryRef3);
// fragment.append(fragment1, fragment2, fragment3)
// // console.log(fragment)

// galleryRef.append(fragment)
// console.log(galleryRef)

// ==========================перебором через фор ич, проверять это======================
// =================по разметке все есть, но картинки не выводит========================
images.forEach(image => {
    const item = document.createElement('li')
    const gallImg = document.createElement('img')
    gallImg.setAttribute("src", image.url)
    gallImg.setAttribute("alt", image.alt)

    item.append(gallImg)
    fragment.append(item)
});

galleryRef.append(fragment)
console.log(galleryRef)

// ==== просто через querySelectorAll не видит classList, кроме перебора можно как то сразу всем добавить класс?=====
const gallImges = document.querySelectorAll("img")
gallImges.forEach(image => {
    image.classList.add("galleryImg")
})

const items = document.querySelectorAll('#gallery li')
items.forEach(item => {
    item.classList.add("gallery__item")
})
// ===============================
galleryRef.classList.add("gallery-js")