"use strict";
exports.__esModule = true;
// 41. Write a TypeScript function to calculate the power of a number(exponentiation).
var calculatePower = function (base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    else if (exponent < 0) {
        // handle negative exponents
        return 1 / (base * calculatePower(base, -exponent - 1));
    }
    else {
        return base * calculatePower(base, exponent - 1);
    }
};
// calculatePower(2, 0) returns 1.
// calculatePower(2, 1) returns 2 * 1 = 2.
// calculatePower(2, 2) returns 2 * 2 = 4.
var base = 2;
var exponent = 3;
console.log(calculatePower(base, exponent));
