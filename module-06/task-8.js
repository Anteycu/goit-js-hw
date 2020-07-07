"use strict"
import {
    default as users
} from "./users.js"

// Массив имен всех пользователей у которых есть друг с указанным именем.

// =============================tried 1st time==========================================
const getUsersWithFriend = (users, friendName) => {
    const NameIsFriend = users.filter(function (user) {
        // console.log(user.friends);

        if (user.friends.includes(friendName)) {
            return {
                // ...user.name --- Почему сюда не заглядывает исполнение, что бы я внутри не поставил, без разницы?
            }
        };
    });
    return NameIsFriend.map((user => user.name));
};

// =============================2рой вариант, сложнодоступный мне==============================================

// const getUsersWithFriend = (users, friendName) => {
//     const result = users.reduce((acc, user) => {
//         user.friends.forEach((friend) => {
//             if (friend === friendName) {
//                 acc.push(user.name)
//             };
//         });
//         return acc
//     }, []);
//     return result
// };

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]