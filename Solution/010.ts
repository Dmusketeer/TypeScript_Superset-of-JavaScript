// 10. Write a TypeScript function to find the minimum and maximum elements in an array.

const minMaxElements = (arr: number[]): { min: number, max: number } => {

    if (arr.length === 0) {
        throw new Error("Array is Empty!")
    }
    let min: number = arr[0]
    let max: number = arr[0]
    for (let i = 1; i < arr.length; i++) {

        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }

    }

    return { min, max }
}

// Example usage:
const numbers = [4, 2, 9, 7, 1, 12, 6];
const result = minMaxElements(numbers);
console.log("Minimum:", result.min);
console.log("Maximum:", result.max);