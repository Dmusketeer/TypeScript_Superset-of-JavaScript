// 51. Implement a TypeScript function to find the first non - repeated character in a string.
var FirstNonRepeatedCharacter = function (str) {
    var charCount = {};
    // Count occurrences of each character
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        charCount[char] = (charCount[char] || 0) + 1;
        console.log(charCount);
    }
    // Find the first non-repeated character
    for (var _a = 0, str_2 = str; _a < str_2.length; _a++) {
        var char = str_2[_a];
        if (charCount[char] === 1) {
            return char;
        }
    }
    // If no non-repeated character is found
    return null;
};
// Example usage:
var input = "eeeDee";
var result = FirstNonRepeatedCharacter(input);
if (result !== null) {
    console.log("The first non-repeated character in \"" + input + "\" is: " + result);
}
else {
    console.log("No non-repeated characters found in \"" + input + "\".");
}
