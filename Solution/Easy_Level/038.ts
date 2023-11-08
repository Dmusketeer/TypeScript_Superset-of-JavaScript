// 38. Write a TypeScript function to remove a specific element from an array.
const removeSpecificElement = (arr: number[], number: number): string | number[] => {
    for (const element of arr) {
        if (!arr.includes(number)) {
            return `${number} is not present in the array`;
        }
        if (element == number) {
            arr.splice(arr.indexOf(element), 1)
        }
    }
    return arr
}
const arr1: number[] = [2, 4, 10, 3, 24]
console.log(removeSpecificElement(arr1, 3))
console.log(removeSpecificElement(arr1, 10))
console.log(removeSpecificElement(arr1, 23))

export { }