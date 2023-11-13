// 42. Implement a TypeScript program to find the unique elements in an array.
const uniqueElement = (arr: number[]): number[] => {
    const uniqueElements: number[] = [];
    for (const element of arr) {
        if (!uniqueElements.includes(element)) {
            uniqueElements.push(element);
        }
    }
    return uniqueElements;
}
const inputArray: number[] = [4, 2, 8, 2, 4, 9, 8, 7];
const uniqueElements = uniqueElement(inputArray);
console.log("Original Array:", inputArray);
console.log("Unique Elements:", uniqueElements);