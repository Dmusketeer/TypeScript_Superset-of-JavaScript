// 33. Implement a TypeScript function to count the occurrences of a character in a string.
const countCharacterOccurrences = (inputStr: string, charToCount: string): number => {
    let count = 0;
    const inputString = inputStr.toLocaleLowerCase()
    const inputChar = charToCount.toLocaleLowerCase()
    for (const char of inputString) {
        if (char == inputChar) {
            count++
        }
    }
    return count
}

console.log(countCharacterOccurrences("Dheeraj Tiwart", "T"))
console.log(countCharacterOccurrences("Dheeraj Tiwari", "e"))