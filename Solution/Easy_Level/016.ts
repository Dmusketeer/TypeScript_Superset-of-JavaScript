// 16. Create a TypeScript function to remove duplicates from an array.
const removeDuplicates = (arr: number[]) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1)  // 1=deleteCount, j=deleteindex
                j-- // Decrement j to account for the removed element
            }
        }
    }
    return arr
}


// j--;: After removing the duplicate element from the array, we decrement the value of j by 1.
// This is done to ensure that the loop continues to check the next element immediately following the removed duplicate.
// Since we've removed one element, we decrement j to make it point to the same index where the duplicate was before
// removal. This adjustment is necessary to avoid skipping elements during the loop.

const arr: number[] = [2, 12, 4, 6, 2, 4, 7, 2, 0, 9, 7, 0] //testCase1
const arr1: number[] = [2, 1, 1, 1, 1] //testCase2
const arr2: number[] = [1, 1, 1, 1] //testCase3

console.log(removeDuplicates(arr))
console.log(removeDuplicates(arr1))
console.log(removeDuplicates(arr2))


export { }