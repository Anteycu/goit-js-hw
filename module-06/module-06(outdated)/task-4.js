"use strict"
import {
    default as users
} from "./users.js"
// Получить массив только неактивных пользователей(поле isActive).

const getInactiveUsers = users => {
    return users.filter(user => user.isActive === false);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]