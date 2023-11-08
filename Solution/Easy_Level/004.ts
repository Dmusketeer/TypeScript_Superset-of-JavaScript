// 4. Implement a TypeScript function to reverse a string.

const reverseString = (str: string): string => {
    let revStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i]
    }
    return revStr
}


let str = "Dheeraj"
console.log(reverseString(str))

export { }