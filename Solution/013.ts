// 13. Write a TypeScript function to convert a string to title case.

const toTitleCase = (str: string): string => {

    const word = str.toLocaleLowerCase().split(" ")
    const titleCaseWords = word.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    return titleCaseWords.join(" ")
}


// Example usage:
const inputString = "this is a sample string";
const titleCaseString = toTitleCase(inputString);
console.log(titleCaseString); // Outputs: "This Is A Sample String"


export { }