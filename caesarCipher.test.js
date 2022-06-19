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

test('return num with no shift', () => {
    expect(caesarCipher("123")).toBe("123");
});