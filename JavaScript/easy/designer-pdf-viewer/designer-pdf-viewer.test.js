const designerPdfViewer = require('./designer-pdf-viewer.solution');

test('verify correctness', () => {
    expect(designerPdfViewer('1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5'.split(' '), 'abc')).toBe(9);
    expect(designerPdfViewer('1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7'.split(' '), 'zaba')).toBe(28);

})