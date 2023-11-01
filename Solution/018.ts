// 18. Write a TypeScript program to find the second largest element in an array.

const secondLargestElement = (arr: number[]) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr[arr.length - 2]
}


const arr1 = [20, 2, 1, 3, 4, 32, 54, 71, 9]
console.log(secondLargestElement(arr1))

export { }