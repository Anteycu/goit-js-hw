"use strict"
import {
    default as users
} from "./users.js"

// Массив имен(поле name) людей, отсортированных в зависимости от количества их друзей(поле friends)

// =================не знаю почему андэфайнд и как связать отсортированный массив кол-ва друзей с именами объектов=======

const getNamesSortedByFriendsCount = users => {
    const numOfFriends = users.map(function (user) {
        user.friends.lenght;

    });
    numOfFriends.sort(function (a, b) {
        a.numOfFriends - b.numOfFriends
    });

};




console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]