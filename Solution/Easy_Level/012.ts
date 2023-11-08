// 12. Create a TypeScript program to find the GCD(Greatest Common Divisor) of two numbers.

// The GCD(Greatest Common Divisor) of two numbers, often denoted as GCD(a, b),
// is the largest positive integer that divides both of the numbers without leaving a remainder.

// The GCD(Greatest Common Divisor) of two numbers, often denoted as GCD(a, b),
// is the largest positive integer that divides both of the numbers without leaving a remainder. 

function findGCD(a: number, b: number): number {
    // The loop uses the Euclidean algorithm to find the GCD.
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Example usage:
const number1 = 48;
const number2 = 18;

// pass-1
// temp= 18
// b=48%18=12
// a=18


// pass-2
// temp=12
// b=18%12=6
// a=12

// pass-3
// temp=6
// b=12%6=0
// a=6


const gcd = findGCD(number1, number2);
console.log(`The GCD of ${number1} and ${number2} is ${gcd}`);

export { }