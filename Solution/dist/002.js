"use strict";
// 2. Create a TypeScript function to find the factorial of a number.
exports.__esModule = true;
var factorial = function (num) { return (num < 1 ? 1 : num * factorial(num - 1)); };
console.log(factorial(5));
