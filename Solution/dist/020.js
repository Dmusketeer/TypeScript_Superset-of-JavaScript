// 20. Write a TypeScript function to check if a number is a prime number.
var isPrime = function (num) {
    if (num < 2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % 2 == 0) {
            return false;
        }
    }
    return true;
};
// Example usage:
var num1 = 17; // Prime number
var num2 = 10; // Not a prime number
console.log(isPrime(num1)); // true
console.log(isPrime(num2)); // false
