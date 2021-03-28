const counterGame = require('./counter-game.solution');

describe('verify correctness', () => {
    test('test 1', () => {
        expect(counterGame(132)).toBe('Louise');
    })

    test('test 2', () => {
        expect(counterGame(1)).toBe('Richard');
    })

    test('test 3', () => {
        expect(counterGame(6)).toBe('Richard');
    })

    test('test 4', () => {
        expect(counterGame(1560834904)).toBe('Richard');
    })

    test('test 5', () => {
        expect(counterGame(1768820483)).toBe('Richard');
    })

    test('test 6', () => {
        expect(counterGame(1533726144)).toBe('Louise');
    })

    test('test 7', () => {
        expect(counterGame(1620434450)).toBe('Richard');
    })

    test('test 8', () => {
        expect(counterGame(1463674015)).toBe('Louise');
    })

    test('test 9', () => {
        expect(counterGame(4194304)).toBe('Richard');
    })
})