//40. Create a TypeScript program to find the product of all numbers in an array.

const productOfNumbers = (arr: number[]): number => {
    let product: number = 1
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i]
    }
    return product
}

const arr: number[] = [2, 3, 4, 5]
console.log(productOfNumbers(arr))
