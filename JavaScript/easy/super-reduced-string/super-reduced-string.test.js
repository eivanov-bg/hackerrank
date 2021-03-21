const superReducedString = require('./super-reduced-string.solution');

test('verify correctness', () => {
    expect(superReducedString('aaabccddd')).toBe('abd');
    expect(superReducedString('aab')).toBe('b');
    expect(superReducedString('abba')).toBe('Empty String');
    expect(superReducedString('abababccbababa')).toBe('Empty String');
    expect(superReducedString('')).toBe('Empty String');
    expect(superReducedString('aaaaaaaa')).toBe('Empty String');
    expect(superReducedString('aaaaaaaaa')).toBe('a');
})