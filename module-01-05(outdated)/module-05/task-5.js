"use strict"

class Car {
    /*
     * Добавь статический метод `getSpecs(car)`,
     * который принимает объект-машину как параметр и выводит
     * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
     */
    static getSpecs(car) {
        return console.log(`Hello there:
        maxSpeed: ${car._maxSpeed}; 
        speed: ${car._speed}; 
        isOn: ${car._isOn};
        distance: ${car._distance}; 
        price: ${car._price}`);
    };
    /*
     * Конструктор получает объект настроек.
     *
     * Добавь свойства будущеего экземпляра класса:
     *  speed - текущая скорость, изначально 0
     *  price - цена автомобиля
     *  maxSpeed - максимальная скорость
     *  isOn - заведен ли автомобиль, значения true или false. Изначально false
     *  distance - общий киллометраж, изначально 0
     */
    constructor({
        speed = 0,
        price = 0,
        maxSpeed = 0,
        isOn = false,
        distance = 0
    }) {
        this._speed = speed;
        this._price = price;
        this._maxSpeed = maxSpeed;
        this._isOn = isOn;
        this._distance = distance;
    }

    /*
     * Добавь геттер и сеттер для свойства price,
     * который будет работать с свойством цены автомобиля.
     */
    get price() {
        return this._price;
    }

    set price(value) {
        return this._price = value;
    }
    /*
     * Добавь код для того чтобы завести автомобиль
     * Записывает в свойство isOn значение true
     */
    turnOn() {
        return this._isOn = true;
    }

    /*
     * Добавь код для того чтобы заглушить автомобиль
     * Записывает в свойство isOn значение false,
     * и сбрасывает текущую скорость в 0
     */
    turnOff() {
        this._isOn = false;
        this._speed = 0;
        // return
    }

    /*
     * Добавялет к свойству speed полученное значение,
     * при условии что результирующая скорость
     * не больше чем значение свойства maxSpeed
     */
    accelerate(value) {
        // let resultSpeed = value + this._speed;
        // if (resultSpeed < this._maxSpeed) {
        //     this._speed += value;
        // }
        if ((this._speed + value) < this._maxSpeed) {
            this._speed += value;
        } else {
            this._speed = `Your car is not a starship!`;
        }
    }

    /*
     * Отнимает от свойства speed полученное значение,
     * при условии что результирующая скорость не меньше нуля
     */
    decelerate(value) {
        let resultSpeed = this._speed - value;
        if (resultSpeed > null) {
            this._speed -= value;
        } else {
            this._speed = `Your car is not TARDIS!`;
        }
    }

    /*
     * Добавляет в поле distance киллометраж (hours * speed),
     * но только в том случае если машина заведена!
     */
    drive(hours) {
        let miles = hours * this._speed;
        if (this._isOn === true && !isNaN(this._speed)) {
            this._distance += miles;
        } else {
            this._maxSpeed = " You want to break your car?!"
            this._isOn = false;
            this._distance = "You stay on the same place - learn how to drive this car!";
        }
    }
}

const mustang = new Car({
    maxSpeed: 200,
    price: 2000
});

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000