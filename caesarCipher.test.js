const caesarCipher = require('./caesarCipher');

test('shift single string value', () => {
    expect(caesarCipher("a")).toBe("b");
});

test('shift multiple string values', () => {
    expect(caesarCipher("abc")).toBe("bcd");
});

test('shift multiple string values with spaces', () => {
    expect(caesarCipher("a b c")).toBe("b c d");
});

test('return num without shift', () => {
    expect(caesarCipher("123")).toBe("123");
});

test('return num without shift nor space', () => {
    expect(caesarCipher("1 2 3")).toBe("1 2 3");
});

test('return num without num shift and with letters', () => {
    expect(caesarCipher("a1b2c3")).toBe("b1c2d3");
});

// test('shift alphabet', () => {
//     expect(caesarCipher("abcdefghijklmnopqrstuvwxyz")).toBe("bcdefghijklmnopqrstuvwxyza");
// });

// test('return letter case', () => {
//     expect(caesarCipher("ABC")).toBe("BCD");
// });