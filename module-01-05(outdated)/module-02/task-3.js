"use strict"

const findLongestWord = function (string) {
    const words = string.split(" ");
    let biggestWord = words[0];

    // for (let i = 1; i < words.length; i += 1) {
    //     const word = words[i];
    //     console.log(biggestWord); //условно Our word
    //     console.log(word);

    //     if (biggestWord.length > word.length) {
    //         console.log("Our word is bigger");
    //     } else {
    //         biggestWord = word;
    //         console.log("Replace our word");
    //     }
    // }
    for (let word of words) {
        if (biggestWord.length < word.length) {
            biggestWord = word;
        }
    }
    return (`This is biggest word - ${biggestWord}`);
}

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'