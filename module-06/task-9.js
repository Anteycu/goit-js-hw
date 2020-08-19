"use strict";
import { default as users } from "./users.js";

// Массив имен(поле name) людей, отсортированных в зависимости от количества их друзей(поле friends)

const getNamesSortedByFriendsCount = (users) => {
  const fn = (a, b) => a.friends.length - b.friends.length;
  return users.sort(fn).map((user) => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
