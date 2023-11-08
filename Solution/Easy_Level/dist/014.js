// 14. Implement a TypeScript function to sort an array of numbers in ascending order.
var ascendingOrder = function (arr) {
    // for (let i = 0; i < arr.length - 1; i++) {
    //     for (let j = 0; j < arr.length - 1 - i; j++) {
    //         if (arr[j] > arr[j + 1]) {
    //             let temp = arr[j];
    //             arr[j] = arr[j + 1];
    //             arr[j + 1] = temp;
    //         }
    //     }
    // }
    // return arr;
    arr.sort(function (a, b) { return a - b; });
    return arr;
};
var arr1 = [2, 1, 14, 6, 8, 9, 13, 21, 35, 46, 67, 79, 23, 12];
console.log(ascendingOrder(arr1));
