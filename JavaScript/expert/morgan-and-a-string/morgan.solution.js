'use strict';

function morganAndString(a, b, currentResult = '', memo = {}) {
    const key = a + ', ' + b;

    if (key in memo) return memo[key];

    if (a === '') return b;
    if (b === '') return a;

    let res = '';

    if (a[0] < b[0]) {
            res = a[0] + morganAndString(a.slice(1), b, currentResult, memo)
    } else if (a[0] > b[0]) {
        return b[0] + morganAndString(a, b.slice(1), currentResult, memo);
    } else {
        const left = a[0] + morganAndString(a.slice(1), b, currentResult, memo);
        const right = b[0] + morganAndString(a, b.slice(1), currentResult, memo);

        res = (left < right) ? left : right;
    }

    memo[key] = currentResult + res;
    return memo[key];
}

module.exports = morganAndString;
