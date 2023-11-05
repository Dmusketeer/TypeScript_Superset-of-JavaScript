// 20. Write a TypeScript function to check if a number is a prime number.
function isPrime(num: number): boolean {
    if (num <= 1) {
        return false; // 0 and 1 are not prime
    }
    if (num <= 3) {
        return true; // 2 and 3 are prime
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }

    // Check for primality using a loop starting from 5 and incrementing by 6
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

// Example usage:
const num1 = 6; // Prime number
const num2 = 9; // Not a prime number

console.log(isPrime(num1)); // true
console.log(isPrime(num2)); // false
