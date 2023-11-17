// 47. Write a TypeScript function to find the longest substring without repeating characters in a string.
const longestSubstringWithoutRepeating = (arr: string): string => {

    const charIndexMap: Record<string, number> = {}
    let maxLength = 0
    let start = 0
    let longestSubstringStart = 0
    for (let i = 0; i < arr.length; i++) {
        const currentChar = arr[i]
        if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= start) {
            // If the character is repeated and the repeated character is in the current substring.
            start = charIndexMap[currentChar] + 1
        }
        charIndexMap[currentChar] = i
        const currentLength = i - start + 1
        if (currentLength > maxLength) {
            maxLength = currentLength
            longestSubstringStart = start
        }
    }
    const longestSubstring = arr.slice(longestSubstringStart, longestSubstringStart + maxLength)
    return longestSubstring
}

// Example usage:
const inputString = "Dheeraj";
const result = longestSubstringWithoutRepeating(inputString);
console.log(result); // Output: "eraj"