// 9. Create a TypeScript program to generate the Fibonacci sequence up to a given number.
// Fibonacci sequence : 0,1,1,2,3,5,8,13,21,34,55,89,144 ....
var generateFibonacciSequenceUpTo = function (number) {
    var a = 0;
    var b = 1;
    var arr = [];
    while (a <= number) {
        arr.push(a);
        var temp = a;
        a = b;
        b = temp + b;
    }
    return arr;
};
// Example usage:
var limit = 1000;
var fibonacciSequence = generateFibonacciSequenceUpTo(limit);
console.log(fibonacciSequence);
