"use strict";
exports.__esModule = true;
// 39. Implement a TypeScript function to find the largest prime number in an array.
var isPrime = function (num) {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    for (var i = 5; i <= Math.sqrt(num); i += 6) {
        if (num % i == 0 || num % (i + 2) == 0) {
            return false;
        }
    }
    return true;
};
var largestPrimeNumber = function (arr) {
    var primeNums = [];
    for (var j = 0; j < arr.length; j++) {
        if (isPrime(arr[j])) {
            primeNums.push(arr[j]);
        }
    }
    var sortedPrimeNums = primeNums.sort(function (a, b) { return a - b; });
    return sortedPrimeNums[sortedPrimeNums.length - 1];
};
var arr = [12, 3, 1, 83, 2, 4, 6, 7, 8, 89];
console.log(largestPrimeNumber(arr));
