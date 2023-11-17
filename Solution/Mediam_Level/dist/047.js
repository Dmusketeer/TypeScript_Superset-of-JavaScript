// 47. Write a TypeScript function to find the longest substring without repeating characters in a string.
var longestSubstringWithoutRepeating = function (arr) {
    var charIndexMap = {};
    var maxLength = 0;
    var start = 0;
    var longestSubstringStart = 0;
    for (var i = 0; i < arr.length; i++) {
        var currentChar = arr[i];
        if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= start) {
            // If the character is repeated and the repeated character is in the current substring
            start = charIndexMap[currentChar] + 1;
        }
        charIndexMap[currentChar] = i;
        var currentLength = i - start + 1;
        if (currentLength > maxLength) {
            maxLength = currentLength;
            longestSubstringStart = start;
        }
    }
    var longestSubstring = arr.slice(longestSubstringStart, longestSubstringStart + maxLength);
    return longestSubstring;
};
// Example usage:
var inputString = "abcabcb";
var result = longestSubstringWithoutRepeating(inputString);
console.log(result); // Output: "abc"
