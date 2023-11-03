// 24. Implement a TypeScript function to remove all whitespace from a string.

const removeWhiteSpace = (str: string): string => {
    // Use a regular expression to match all whitespace characters (space, tab, newline, etc.)
    // and replace them with an empty string.
    return str.replace(/\s/g, "")
}

const stringWithWhitespace = "Hello Bro! How are you?";
const stringWithoutWhitespace = removeWhiteSpace(stringWithWhitespace);
console.log(stringWithoutWhitespace); // Output: "HelloBro!Howareyou?"