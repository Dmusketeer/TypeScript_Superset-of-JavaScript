// 8. Write a TypeScript function to calculate the area of a rectangle.

// Area of a rectangle is:
// Area = Length(L) × Width(W)

const rectangleArea = (width: number, height: number): string => {
    let A = width * height
    return `Area of a rectangle = ${A} square units`
}


let width = 20
let height = 2.4
console.log(rectangleArea(width, height))