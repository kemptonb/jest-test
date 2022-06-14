const calc = require('./calculator');

test('calculate method', () => {
  expect(calc(1, 1, add)).toBe(2);
});