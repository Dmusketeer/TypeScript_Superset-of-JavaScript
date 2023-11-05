// 32. Write a TypeScript function to check if a number is a palindrome.

const isPalindromeNumber = (num: number): boolean => {
    const numToStr = num.toString()
    const reverseStr = numToStr.split("").reverse().join("")
    return numToStr == reverseStr

}

const num1: number = 121
const num2: number = 202
console.log(isPalindromeNumber(num1))
console.log(isPalindromeNumber(num2))