'use strict';

function morganAndString(a, b, currentResult = '', memo = {}) {
    let res = '';
    const key = a + ', ' + b;

    if (key in memo) return memo[key];

    if (a === '') {
        res = b;
    } else if (b === '') {
        res = a;
    } else if (a[0] < b[0]) {
            res = a[0] + morganAndString(a.slice(1), b, currentResult, memo)
        } else if (a[0] > b[0]) {
            return b[0] + morganAndString(a, b.slice(1), currentResult, memo);
        } else {
            const left = a[0] + morganAndString(a.slice(1), b, currentResult, memo);
            const right = b[0] + morganAndString(a, b.slice(1), currentResult, memo);

            if (left < right) {
                res = left;
            } else {
                res = right
            }
        }

    memo[key] = currentResult + res;
    return memo[key];
}

module.exports = morganAndString;
