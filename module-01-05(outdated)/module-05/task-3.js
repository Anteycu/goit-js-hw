"use strict"
// Напиши класс Storage, который будет создавать объекты для управления складом товаров. 
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items. 
// ========================== Вопрос ==================================
// То есть при вызове:
// создается объект storage с key("items") и value([наш масив]), по этому дальнейшие обращения через storage.items ?? 
// Меня путает первый метод с заданной константой, может я его неправильно написал...
// ====================================================================
// Добавь методы класса:
// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих.

class Storage {
    constructor(items) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
    addItem(item) {
        this.items = items;
        return items.push(item);
    }

    removeItem(item) {
        // for (const findedItem of items) {
        if (items.includes(item)) {
            let findedIndex = items.indexOf(item);
            return items.splice(findedIndex, 1);
        }
        // }
    }

};

// Storage.getItems = function (param) {
//     param = [];
//     this.items.push = param;
// };

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
]);
// console.log(storage);

const items = storage.getItems();
// ============================= продолжение вопроса ==================================
// Непонятно как тут присовилось к внешней переменной, какая взаимосвязь с внутренностями объекта? По факту я сказал, 
// что есть объект в котором нет ключа, но есть масив как значение, а потом как то извне, переменной, привязал к массиву ключ.
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
// console.log(storage.removeItem()); --- почему здесь андефайнд? Как можно посмотреть, что возвращает мето
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]