"use strict"
import {
    default as users
} from "./users.js"

// Получить массив всех умений всех пользователей(поле skills), при этом не должно быть повторяющихся умений и они
// должны быть отсортированы в алфавитном порядке.

// =====================проверять это ============================
const getSortedUniqueSkills = users => {
    return users.reduce(function (acc, user) {
        user.skills.forEach(function (skill) {
            if (!acc.includes(skill)) {
                acc.push(skill)
            }
        });
        return acc.sort();
    }, []);
}

// ==============================почему тут нельзя вернуть через ссылку, или я возвращаю не то?========================
// const getSortedUniqueSkills = users => {
//     const allSkills = users.reduce(function (acc, user) {
//         let newSkills = acc.push(...user.skills);
//         return newSkills;
//     }, [])
//     return allSkills
// };


console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 
// 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
// =====================почему этот консоль ниже не вызывается?=======================
сonsole.log(users);