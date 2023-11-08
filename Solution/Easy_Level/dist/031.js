"use strict";
exports.__esModule = true;
// 31. Create a TypeScript program to find the sum of all prime numbers in an array.
function isPrime(num) {
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
    for (var i = 5; i <= Math.sqrt(num); i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}
var sumOfAllPrimes = function (arr) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (isPrime(num)) {
            sum += num;
        }
    }
    return sum;
};
var arr = [4, 3, 6, 9, 13];
console.log(sumOfAllPrimes(arr));
