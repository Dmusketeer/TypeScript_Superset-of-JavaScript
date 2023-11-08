// 24. Implement a TypeScript function to remove all whitespace from a string.
var removeWhiteSpace = function (str) {
    // Use a regular expression to match all whitespace characters (space, tab, newline, etc.)
    // and replace them with an empty string.
    return str.replace(/\s/g, "");
};
var stringWithWhitespace = "Hello Bro! How are you?";
var stringWithoutWhitespace = removeWhiteSpace(stringWithWhitespace);
console.log(stringWithoutWhitespace); // Output: "HelloBro!Howareyou?"
