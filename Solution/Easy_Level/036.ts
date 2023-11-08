// 36. Implement a TypeScript function to find the intersection of two arrays.

const findIntersection = (arr1: number[], arr2: number[]) => {
    return arr1.filter((value) => {
        return arr2.includes(value)
    })
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const intersection = findIntersection(array1, array2);
console.log(intersection); // Output: [3, 4, 5]