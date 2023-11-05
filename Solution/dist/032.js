// 32. Write a TypeScript function to check if a number is a palindrome.
var isPalindromeNumber = function (num) {
    var numToStr = num.toString();
    var reverseStr = numToStr.split("").reverse().join("");
    return numToStr == reverseStr;
};
var num1 = 121;
var num2 = 202;
console.log(isPalindromeNumber(num1));
console.log(isPalindromeNumber(num2));
