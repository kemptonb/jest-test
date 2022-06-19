const caesarCipher = require('./caesarCipher');

test('shift string values', () => {
  expect(caesarCipher("a")).toBe("b");
});