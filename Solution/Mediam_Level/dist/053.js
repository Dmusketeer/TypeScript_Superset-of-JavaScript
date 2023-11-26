// 53. Write a TypeScript function to find the maximum subarray sum in an array (Kadane's algorithm).
function maxSubarraySum(arr) {
    if (arr.length === 0) {
        throw new Error("Array must not be empty.");
    }
    var sum = 0;
    var maxi = arr[0];
    for (var i = 1; i < arr.length; i++) {
        // step_1
        sum = sum + arr[i];
        // step_2
        maxi = Math.max(maxi, sum);
        // step_3
        if (sum < 0) {
            sum = 0;
        }
    }
    return maxi;
}
// Example usage:
var array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
try {
    var maxSum = maxSubarraySum(array);
    console.log("Maximum Subarray Sum: " + maxSum);
}
catch (error) {
    console.error(error.message);
}
