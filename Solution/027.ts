// 27. Implement a TypeScript function to find the median of an array.

// For example, consider the dataset[3, 5, 1, 4, 2].When sorted in ascending order, 
// it becomes[1, 2, 3, 4, 5].Since it has an odd number of values(5), the median is the middle value, which is 3.
// For another example, consider the dataset[7, 9, 1, 3].When sorted, it becomes[1, 3, 7, 9].
// In this case, it has an even number of values(4), so the median is the average of the two middle values, which is(3 + 7) / 2 = 5.

const medianOfArray = (arr: number[]): number | null => {
    // Check if the input array is empty
    if (arr.length == 0) {
        return null
    }
    // Sort the array in ascending order
    const sortedArray = arr.sort((a, b) => a - b)

    // Determine the middle index
    const middleIndex = Math.floor(arr.length / 2)
    if (arr.length % 2 !== 0) {
        // Odd-length array: Return the middle value
        return sortedArray[middleIndex]
    } else {
        // Even-length array: Return the average of the two middle values
        return (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2
    }
}

const array1 = [3, 5, 1, 4, 2];
const array2 = [7, 9, 1, 3];
const array3 = [2, 4, 6, 8];

const median1 = medianOfArray(array1);
const median2 = medianOfArray(array2);
const median3 = medianOfArray(array3);

console.log(`Median 1: ${median1}`); // Output: Median 1: 3
console.log(`Median 2: ${median2}`); // Output: Median 2: 5
console.log(`Median 3: ${median3}`); // Output: Median 3: 5