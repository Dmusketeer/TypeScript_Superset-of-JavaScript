// 45. Implement a TypeScript function to rotate an array by a given number of positions.

const rotatedArray = (arr: number[], positions: number): number[] => {
    const n: number = arr.length;
    const rotatedArray: number[] = [];

    // Ensure positions is non-negative and within the length of the array
    positions = positions % n;
    if (positions < 0) {
        positions += n
    }

    // Copy the elements from the rotated positions to the end of the array
    for (let i = n - positions; i < n; i++) {
        rotatedArray.push(arr[i])
    }

    for (let j = 0; j < n - positions; j++) {
        rotatedArray.push(arr[j])
    }

    return rotatedArray
}



// Example usage
const originalArray = [1, 2, 3, 4, 5];
const RotatedArray = rotatedArray(originalArray, -2);

console.log("Original Array:", originalArray);
console.log("Rotated Array:", RotatedArray);

export { }
