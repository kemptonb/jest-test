const calc = require('./calculator');

test('calculate method', () => {
  expect(calc.add(1, 1)).toBe(2);
  expect(calc.sub(1, 1)).toBe(0);
  expect(calc.mult(2, 3)).toBe(6);
  expect(calc.div(10, 2)).toBe(5);
});