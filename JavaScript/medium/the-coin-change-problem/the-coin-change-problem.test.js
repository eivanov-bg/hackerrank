const getWays = require('./the-coin-change-problem.solution');

test('verify correctness', () => {
    expect(getWays(3, [8, 3, 1, 2])).toBe(3);
    expect(getWays(4, [3, 1, 2])).toBe(4);
    expect(getWays(10, [2, 5, 3, 6])).toBe(5);
    expect(getWays(250, [1])).toBe(1);
    expect(getWays(100, [100])).toBe(1);
    expect(getWays(100, [99])).toBe(0);
})