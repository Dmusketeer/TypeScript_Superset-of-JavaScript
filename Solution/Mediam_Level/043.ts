// 43. Create a TypeScript function to merge two sorted arrays into a single sorted array.


const singleSortedArray = (arr: number[], arr2: number[]): number[] => {
    let mergedArray: number[] = [...arr1, ...arr2];
    let sortedArray: number[] = mergedArray.sort((a: number, b: number): number => a - b)
    return sortedArray
}

let arr1: number[] = [2, 1, 4, 7, 8]
let arr2: number[] = [6, 3, 5]
let sortedArray: number[] = singleSortedArray(arr1, arr2)
console.log(sortedArray)