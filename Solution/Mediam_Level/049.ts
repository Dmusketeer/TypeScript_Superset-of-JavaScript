// 49. Create a TypeScript function to perform binary search on a sorted array.

const binarySearch = (arr: number[], targetElement: number): number => {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (arr[mid] === targetElement) {
            return mid // Element found, return its index
        } else if (arr[mid] < targetElement) {
            left = mid + 1 // Search the right half
        } else {
            right = mid - 1 // Search the left half
        }
    }
    return -1 // Element not found
}


// Example usage:
const sortedArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const targetElement = 7;
const result = binarySearch(sortedArray, targetElement);

if (result !== -1) {
    console.log(`Element ${targetElement} found at index ${result}.`);
} else {
    console.log(`Element ${targetElement} not found in the array.`);
}
