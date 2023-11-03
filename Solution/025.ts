// 25. Create a TypeScript program to count the number of vowels in a string.

const vowelsCount = (str: string): number => {
    const vowelRegex = /[aeiouAEIOU]/g
    const matches = str.match(vowelRegex);
    return matches ? matches.length : 0;
}


let word = "Dheeraj"
console.log(vowelsCount(word))
