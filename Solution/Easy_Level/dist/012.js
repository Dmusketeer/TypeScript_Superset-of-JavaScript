// 12. Create a TypeScript program to find the GCD(Greatest Common Divisor) of two numbers.
// The GCD(Greatest Common Divisor) of two numbers, often denoted as GCD(a, b),
// is the largest positive integer that divides both of the numbers without leaving a remainder.
// The GCD(Greatest Common Divisor) of two numbers, often denoted as GCD(a, b),
// is the largest positive integer that divides both of the numbers without leaving a remainder. 
function findGCD(a, b) {
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
// Example usage:
var number1 = 48;
var number2 = 18;
var gcd = findGCD(number1, number2);
console.log("The GCD of " + number1 + " and " + number2 + " is " + gcd);
