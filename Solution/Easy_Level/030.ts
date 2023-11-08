// 30. Implement a TypeScript function to check if a string is an anagram.

// The word "listen" can be rearranged to form the word "silent."
// These two words are anagrams of each other because they use the same letters, just in a different order.

const areAnagrams = (word1: string, word2: string): boolean => {
    // Remove spaces and convert the words to lowercase for accurate comparison
    word1 = word1.replace(/\s/g, "").toLowerCase();
    word2 = word2.replace(/\s/g, "").toLowerCase();
    if (word1.length !== word2.length) {
        return false
    }
    // Convert the words to arrays, sort them, and then join them back into strings
    let sortedWord1 = word1.split("").sort().join("")
    let sortedWord2 = word2.split("").sort().join("")
    return sortedWord1 == sortedWord2
}

// Examples of word pairs to check for anagrams
const wordPairs = [
    ["listen", "silent"],
    ["debit card", "bad credit"],
    ["astronomer", "moon starer"],
    ["schoolmaster", "the classroom"],
    ["angel", "gleana"],
    ["triangle", "integril"],
    ["cinema", "iceWomman"],
    ["listen", "linte"],
    ["funeral", "realofun"],
    ["eleven plus twoo", "twelve plus one"]
];

for (const pair of wordPairs) {
    const result = areAnagrams(pair[0], pair[1]);
    console.log(`${pair[0]} and ${pair[1]} Are ${result ? "" : " Not"} Anagrams.`)
}


export { }
