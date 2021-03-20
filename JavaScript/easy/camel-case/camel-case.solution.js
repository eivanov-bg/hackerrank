'use strict';

function camelcase(s) {
    const uppercaseLetters = {};
    for (let char of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
        uppercaseLetters[char] = true;
    }

    let wordCount = s.length > 0 ? 1 : 0;

    for (let char of s) {
        if (uppercaseLetters[char]) {
            wordCount++;
        }
    }

    return wordCount;
}

module.exports = camelcase;
