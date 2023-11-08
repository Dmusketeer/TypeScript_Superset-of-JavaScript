// 28. Create a TypeScript program to generate a random array of numbers.

const randomArray = (len: number): number[] => {
    const arr: number[] = []
    for (let i = 0; i < len; i++) {
        arr.push(Math.floor(Math.random() * 11))
    }
    return arr
}


console.log(randomArray(8))