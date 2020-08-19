"use strict";
import { default as users } from "./users.js";

// Массив имен всех пользователей у которых есть друг с указанным именем.

// ================================Variant 1==========================================
// const getUsersWithFriend = (users, friendName) => {
//   const NameIsFriend = users.filter(function (user) {
//     if (user.friends.includes(friendName)) {
//       return {}; // почему сработал пустой литерал?
//     }
//   });
//   return NameIsFriend.map((user) => user.name);
// };

// ============================Variant 2 more difficult==============================================

const getUsersWithFriend = (users, friendName) => {
  const result = users.reduce((acc, user) => {
    user.friends.forEach((friend) => {
      if (friend === friendName) {
        acc.push(user.name);
      }
    });
    return acc;
  }, []);
  return result;
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
