const functions = require('./functions');

test('get longest substring', () => {
  expect(functions.longestSubstring("milsh", "chlsh")).toBe("lsh");
});

test('get longest substring', () => {
  expect(functions.longestSubstring("milk", "rilk")).toBe("ilk");
})

test('get longest substring', () => {
  expect(functions.longestSubstring("mariana", "maria")).toBe("maria");
})

test('get longest substring', () => {
  expect(functions.longestSubstring("getter", "gettter")).toBe("gett");
})