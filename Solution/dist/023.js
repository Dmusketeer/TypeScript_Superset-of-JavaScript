// 23. Write a TypeScript program to find the LCM(Least Common Multiple) of two numbers.
function findGCD(a, b) {
    if (b === 0) {
        return a;
    }
    return findGCD(b, a % b);
}
function findLCM(a, b) {
    var gcd = findGCD(a, b);
    return (a * b) / gcd;
}
// Example usage:
var num1 = 12; // Replace with your first number
var num2 = 18; // Replace with your second number
var lcm = findLCM(num1, num2);
console.log("The LCM of " + num1 + " and " + num2 + " is " + lcm);
