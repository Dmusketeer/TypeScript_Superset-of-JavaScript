// 51. Implement a TypeScript function to find the first non - repeated character in a string.

const FirstNonRepeatedCharacter = (str: string): string | null => {
    const charCount: { [key: string]: number } = {}
    // Count occurrences of each character
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1
        console.log(charCount)
    }
    // Find the first non-repeated character
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    // If no non-repeated character is found
    return null
}



// Example usage:
const input = "eeeDee";
const result = FirstNonRepeatedCharacter(input);

if (result !== null) {
    console.log(`The first non-repeated character in "${input}" is: ${result}`);
} else {
    console.log(`No non-repeated characters found in "${input}".`);
}
