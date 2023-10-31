// 17. Implement a TypeScript function to reverse words in a sentence.
function reverseWordsInSentence(sentence: string): string {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Reverse the order of words
    const reversedWords = words.reverse();

    // Join the reversed words to form the reversed sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

// Example usage:
const originalSentence = "Hello, world! This is a sample sentence.";
const reversedSentence = reverseWordsInSentence(originalSentence);

console.log(reversedSentence);
// Output: "sentence. sample a is This world! Hello,"
