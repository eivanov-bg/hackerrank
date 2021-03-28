'use strict';

function counterGame(n) {
    const LOUISE = 'Louise';
    const RICHARD = 'Richard';

    n = n - 1;

    let isRichardWinner = true;

    while (n !== 0) {
        n = n & (n-1);
        isRichardWinner = !isRichardWinner;
    }

    return isRichardWinner ? RICHARD : LOUISE;
}

module.exports = counterGame;
