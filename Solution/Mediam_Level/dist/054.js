// 54. Implement a TypeScript program to find the kth largest element in an array.
var KthLargestElementFinder = /** @class */ (function () {
    function KthLargestElementFinder() {
    }
    KthLargestElementFinder.prototype.findKthLargest = function (nums, k) {
        if (k < 1 || k > nums.length) {
            throw new Error("Invalid value of k");
        }
        // Sort the array in descending order
        nums.sort(function (a, b) { return b - a; });
        // Return the kth largest element
        return nums[k - 1];
    };
    return KthLargestElementFinder;
}());
// Example usage
var kthLargestFinder = new KthLargestElementFinder();
var array = [12, 13, 14, 32, 42, 43];
var k = 4;
var kthLargest = kthLargestFinder.findKthLargest(array, k);
console.log("The " + k + "th largest element is: " + kthLargest);
