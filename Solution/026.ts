// 26. Write a TypeScript function to reverse an array in place.

const reveseArrayInPlace = (arr: number[]): number[] => {

    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        // Move the left pointer to the right and the right pointer to the left
        left++
        right--
    }
    return arr
}

const arr = [20, 12, 34, 23, 12, 56]
console.log(reveseArrayInPlace(arr))