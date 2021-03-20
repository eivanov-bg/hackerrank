const minimumNumber = require('./strong-password.solution')

test('verify correctness', () => {
    expect(minimumNumber(5, '2bbbb')).toBe(2);
    expect(minimumNumber(5, '2bb#A')).toBe(1);
    expect(minimumNumber(1, 'a')).toBe(5);
    expect(minimumNumber(10, 'aaaaaaaaaa')).toBe(3);
    expect(minimumNumber(6, 'aaAA@2')).toBe(0);
    expect(minimumNumber(100, 'a'.repeat(100))).toBe(3);
})