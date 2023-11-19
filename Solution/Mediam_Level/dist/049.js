// 49. Create a TypeScript function to perform binary search on a sorted array.
var binarySearch = function (arr, targetElement) {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (arr[mid] === targetElement) {
            return mid; // Element found, return its index
        }
        else if (arr[mid] < targetElement) {
            left = mid + 1; // Search the right half
        }
        else {
            right = mid - 1; // Search the left half
        }
    }
    return -1; // Element not found
};
// Example usage:
var sortedArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var targetElement = 7;
var result = binarySearch(sortedArray, targetElement);
if (result !== -1) {
    console.log("Element " + targetElement + " found at index " + result + ".");
}
else {
    console.log("Element " + targetElement + " not found in the array.");
}
