'use strict';

const numbers = {};
const lower_case = {};
const upper_case = {};
const special_characters = {};
const min_required_length = 6;

for (let char of '0123456789') {
    numbers[char] = true;
}

for (let char of 'abcdefghijklmnopqrstuvwxyz') {
    lower_case[char] = true;
}

for (let char of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
    upper_case[char] = true;
}

for (let char of '!@#$%^&*()-+') {
    special_characters[char] = true;
}

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong

    let validation_result = 0;

    for (let char of password) {
        validation_result |= lower_case[char] ? 1 : upper_case[char]? 2 : numbers[char] ? 4 : special_characters[char] ? 8 : 0;
    }

    let requiredCharsCount = 4;
    for (let num of [1, 2, 4, 8]) {
        requiredCharsCount -= ((validation_result & num) === num ? 1: 0);
    }

    const remainderToMin = min_required_length - n - requiredCharsCount;

    return requiredCharsCount + (remainderToMin > 0 ? remainderToMin : 0);
}

module.exports = minimumNumber;
