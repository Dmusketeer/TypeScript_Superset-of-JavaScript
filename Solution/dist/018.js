"use strict";
// 18. Write a TypeScript program to find the second largest element in an array.
exports.__esModule = true;
var secondLargestElement = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr[arr.length - 2];
};
var arr1 = [20, 2, 1, 3, 4, 32, 54, 71, 9];
console.log(secondLargestElement(arr1));
