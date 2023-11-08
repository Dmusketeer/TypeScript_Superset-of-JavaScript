// 23. Write a TypeScript program to find the LCM(Least Common Multiple) of two numbers.
function findGCD(a: number, b: number): number {
    if (b === 0) {
        return a;
    }
    return findGCD(b, a % b);
}

function findLCM(a: number, b: number): number {
    const gcd = findGCD(a, b);
    return (a * b) / gcd;
}

// Example usage:
const num1 = 12; // Replace with your first number
const num2 = 18; // Replace with your second number

const lcm = findLCM(num1, num2);
console.log(`The LCM of ${num1} and ${num2} is ${lcm}`);

export { }