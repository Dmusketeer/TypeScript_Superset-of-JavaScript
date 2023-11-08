// 10. Write a TypeScript function to find the minimum and maximum elements in an array.
var minMaxElements = function (arr) {
    if (arr.length === 0) {
        throw new Error("Array is Empty!");
    }
    var min = arr[0];
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return { min: min, max: max };
};
// Example usage:
var numbers = [4, 2, 9, 7, 1, 12, 6];
var result = minMaxElements(numbers);
console.log("Minimum:", result.min);
console.log("Maximum:", result.max);
