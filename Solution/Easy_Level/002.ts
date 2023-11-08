// 2. Create a TypeScript function to find the factorial of a number.

const factorial=(num: number): number =>( num<1?1:num*factorial(num-1))

console.log(factorial(5))

export {}