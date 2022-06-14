const capitalize = require('./capitalize');

test('capitalize first letter of string', () => {
  expect(capitalize("john")).toBe("John");
});