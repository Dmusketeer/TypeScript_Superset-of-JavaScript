// 54. Implement a TypeScript program to find the kth largest element in an array.

class KthLargestElementFinder {
    findKthLargest(nums: number[], k: number): number {
        if (k < 1 || k > nums.length) {
            throw new Error("Invalid value of k");
        }

        // Sort the array in descending order
        nums.sort((a, b) => b - a);

        // Return the kth largest element
        return nums[k - 1];
    }
}

// Example usage
const kthLargestFinder = new KthLargestElementFinder();

const array = [12, 13, 14, 32, 42, 43];
const k = 4;

const kthLargest = kthLargestFinder.findKthLargest(array, k);
console.log(`The ${k}th largest element is: ${kthLargest}`);