// 36. Implement a TypeScript function to find the intersection of two arrays.
var findIntersection = function (arr1, arr2) {
    return arr1.filter(function (value) {
        return arr2.includes(value);
    });
};
var array1 = [1, 2, 3, 4, 5];
var array2 = [3, 4, 5, 6, 7];
var intersection = findIntersection(array1, array2);
console.log(intersection); // Output: [3, 4, 5]
