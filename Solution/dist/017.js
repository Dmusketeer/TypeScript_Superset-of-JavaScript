// 17. Implement a TypeScript function to reverse words in a sentence.
function reverseWordsInSentence(sentence) {
    // Split the sentence into words
    var words = sentence.split(' ');
    // Reverse the order of words
    var reversedWords = words.reverse();
    // Join the reversed words to form the reversed sentence
    var reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}
// Example usage:
var originalSentence = "Hello, world! This is a sample sentence.";
var reversedSentence = reverseWordsInSentence(originalSentence);
console.log(reversedSentence);
// Output: "sentence. sample a is This world! Hello,"
