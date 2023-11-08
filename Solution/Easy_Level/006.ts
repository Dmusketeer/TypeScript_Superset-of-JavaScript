// 6. Write a TypeScript function to count the number of words in a string.
// str="Dheeraj" //output: 7

const numberOfWords = (str: string): number => {
    let cleanedStr = str.replace(/\s+/g, "") //
    console.log(cleanedStr)
    let count = 0
    for (let i = 0; i < cleanedStr.length; i++) {
        count += 1
    }
    return count
}


let str = "Dheeraj Tiwari"
console.log(numberOfWords(str))

export { } // Add an empty export{} to get rid of error messages 