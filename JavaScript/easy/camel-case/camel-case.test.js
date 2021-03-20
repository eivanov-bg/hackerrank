const camelCase = require('./camel-case.solution');

test( 'verify correctness', () => {
    expect(camelCase('saveChangesInTheEditor')).toBe(5);
})