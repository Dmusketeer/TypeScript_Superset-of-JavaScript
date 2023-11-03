// 25. Create a TypeScript program to count the number of vowels in a string.
var vowelsCount = function (str) {
    var vowelRegex = /[aeiouAEIOU]/g;
    var matches = str.match(vowelRegex);
    return matches ? matches.length : 0;
};
var word = "Dheeraj";
console.log(vowelsCount(word));
