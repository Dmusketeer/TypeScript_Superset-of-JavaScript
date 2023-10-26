// 13. Write a TypeScript function to convert a string to title case.
var toTitleCase = function (str) {
    var a = str.toLocaleLowerCase().split(" ");
    var b = a.map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); });
    return b.join(" ");
};
// Example usage:
var inputString = "this is a sample string";
var titleCaseString = toTitleCase(inputString);
console.log(titleCaseString); // Outputs: "This Is A Sample String"
