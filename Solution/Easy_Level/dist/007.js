// 7. Implement a TypeScript function to find the largest element in an array.
var largestElement = function (arr) {
    var largeEle = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= largeEle) {
            largeEle = arr[i];
        }
    }
    return largeEle;
};
var arr = [12, 23, 34, 14, 55,];
console.log(largestElement(arr)); //55
