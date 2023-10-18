// 2. Create a TypeScript function to find the factorial of a number.
var factorial = function (num) { return (num < 1 ? 1 : num * factorial(num - 1)); };
console.log(factorial(5));
