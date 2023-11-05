// 32. Write a TypeScript function to check if a number is a palindrome.

const isPalindromeNumber = (num: number): boolean => {
    // const numToStr = num.toString()
    // const reverseStr = numToStr.split("").reverse().join("")
    // return numToStr == reverseStr

    //! palindrome without using JavaScript/TypeScript 
    if (num < 0) {
        return false;
    }
    let reversed = 0
    while (num > 0) {
        const digit = num % 10 //get the last digit //1
        reversed = reversed * 10 + digit //Add the digit to the reversed number //reversed=1
        num = Math.floor(num / 10) //Remove the last digit from the original number //12
    }
    return num == reversed
}

const num1: number = 121
const num2: number = 202
console.log(isPalindromeNumber(num1))
console.log(isPalindromeNumber(num2))