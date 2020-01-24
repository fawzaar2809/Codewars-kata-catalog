// Sum Numbers
function sum(numbers) {
  "use strict";
  const result = numbers.reduce((total, value) => (total += value), 0);
  return result;
}
