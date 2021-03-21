'use strict';

function designerPdfViewer(h, word) {
    let maxHeight = 0;
    const charCode_a = 'a'.charCodeAt(0);

    for (let char of word) {
        const currentHeight = h[char.charCodeAt(0) - charCode_a];
        if (currentHeight > maxHeight) {
            maxHeight = currentHeight;
        }
    }

    return word.length * maxHeight;
}

module.exports = designerPdfViewer;
