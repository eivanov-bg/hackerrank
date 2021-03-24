'use strict';

function getWays(n, c) {
    // Create the array to store the bottom-up solution
    let a = Array.from(Array(c.length + 1), ()  => new Array(n + 1));

    // Base case - all cells = 0 except the first column, which is = 1
    for (let j = 0; j <= c.length; j++) {
        for (let i = 0; i <= n; i++) {
            a[j][i] = i === 0 ? 1 : 0;
        }
    }

    // Divide to sub-problems - how to reach the sum from 1..n by including one coin per iteration?
    for (let j = 1; j <= c.length; j++) {
        for (let i = 1; i <= n; i++) {
            if (c[j - 1] > i) {
                a[j][i] = a[j - 1][i]
            } else {
                a[j][i] = a[j - 1][i] + a[j][i - c[j-1]]
            }
        }
    }

    // The bottom-right cell is the result
    return a[c.length][n];
}

module.exports = getWays;
