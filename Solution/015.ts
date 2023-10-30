// 15. Write a TypeScript program to calculate the sum of all even numbers in an array.

// const sumOfEvenNumber = (arr: number[]): number => {
//     let sum: number = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             sum = sum + arr[i];
//         }
//     }
//     return sum;
// }


const sumOfEvenNumber = (arr: number[]): number => {
    return arr.reduce((sum, num) => num % 2 == 0 ? sum + num : sum, 0)
}

let arr1 = [2, 1, 5, 3, 7, 8, 9, 4]
console.log(sumOfEvenNumber(arr1))


export { }

