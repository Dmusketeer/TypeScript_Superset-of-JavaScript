// 35. Write a TypeScript function to check if a string is a pangram(contains all letters of the alphabet).

const isPangram = (str: string): boolean => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    for (const char of alphabet) {
        if (!str.toLowerCase().includes(char)) {
            return false
        }
    }
    return true
}

const inputString = "The quick brown fox jumps over the lazy dog";
const isPangramString = isPangram(inputString);
console.log(`Is it a pangram? ${isPangramString}`);


