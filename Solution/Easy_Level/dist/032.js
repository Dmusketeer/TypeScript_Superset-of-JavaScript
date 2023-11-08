// 32. Write a TypeScript function to check if a number is a palindrome.
var isPalindromeNumber = function (num) {
    // const numToStr = num.toString()
    // const reverseStr = numToStr.split("").reverse().join("")
    // return numToStr == reverseStr
    //! palindrome without using JavaScript/TypeScript 
    if (num < 0) {
        return false;
    }
    var reversed = 0;
    while (num > 0) {
        var digit = num % 10; //get the last digit //1
        reversed = reversed * 10 + digit; //Add the digit to the reversed number //reversed=1
        num = Math.floor(num / 10); //Remove the last digit from the original number //12
    }
    return num == reversed;
};
var num1 = 121;
var num2 = 202;
console.log(isPalindromeNumber(num1));
console.log(isPalindromeNumber(num2));
