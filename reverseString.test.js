const reverse = require('./reverseString');

test('reverse string', () => {
  expect(reverse("john")).toBe("nhoj");
});