// 43. Create a TypeScript function to merge two sorted arrays into a single sorted array.
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var singleSortedArray = function (arr, arr2) {
    var mergedArray = __spreadArrays(arr1, arr2);
    var sortedArray = mergedArray.sort(function (a, b) { return a - b; });
    return sortedArray;
};
var arr1 = [2, 1, 4, 7, 8];
var arr2 = [6, 3, 5];
var sortedArray = singleSortedArray(arr1, arr2);
console.log(sortedArray);
