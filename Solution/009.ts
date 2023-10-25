// 9. Create a TypeScript program to generate the Fibonacci sequence up to a given number.

// Fibonacci sequence : 0,1,1,2,3,5,8,13,21,34,55,89,144 ....


const generateFibonacciSequenceUpTo = (number: number): number[] => {
    let a = 0
    let b = 1
    let arr: number[] = []
    while (a <= number) {
        arr.push(a)
        const temp = a
        a = b
        b = temp + b
    }
    return arr
}

// Example usage:
const limit = 1000;
const fibonacciSequence = generateFibonacciSequenceUpTo(limit);
console.log(fibonacciSequence);
