// 5. Create a TypeScript function to check if a string is a palindrome.
// str="naman"
// revStr="naman"
var palindrome = function (str) {
    var newStr = "";
    var cleanedString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // Remove non-alphanumeric characters and convert to lowercase
    console.log(cleanedString);
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += cleanedString[i];
    }
    console.log(newStr);
    if (cleanedString == newStr) {
        return "String is palindrome";
    }
    else {
        return "String is Not Palindrome";
    }
};
// Example usage:
var str1 = "Racecar";
console.log(palindrome(str1));
var str2 = "Dheeraj";
console.log(palindrome(str2));
