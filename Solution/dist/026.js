// 26. Write a TypeScript function to reverse an array in place.
var reveseArrayInPlace = function (arr) {
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
};
var arr = [20, 12, 34, 23, 12, 56];
console.log(reveseArrayInPlace(arr));
