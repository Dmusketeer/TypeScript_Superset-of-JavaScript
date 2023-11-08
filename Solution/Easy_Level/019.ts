// 19. Create a TypeScript function to check if a string contains only digits.

const containOnlyDigits = (str: string): boolean => {
    const regex = /^\d+$/
    return regex.test(str)
}

const str1 = "1234353423"
const str2 = "Dheera123"

console.log(containOnlyDigits(str1)) //true
console.log(containOnlyDigits(str2)) //false
