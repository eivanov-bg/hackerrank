const camelCase = require('./camel-case.solution');

test( 'verify correctness', () => {
    expect(camelCase('saveChangesInTheEditor')).toBe(5);
    expect(camelCase('')).toBe(0);
    expect(camelCase('abc')).toBe(1);
    expect(camelCase('aBCD')).toBe(4);
    expect(camelCase('a1B2C3')).toBe(3);
    expect(camelCase('oneTwoThree')).toBe(3);
})