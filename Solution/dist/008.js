// 8. Write a TypeScript function to calculate the area of a rectangle.
// Area of a rectangle is:
// Area = Length(L) × Width(W)
var rectangleArea = function (width, height) {
    var A = width * height;
    return "Area of a rectangle = " + A + " square units";
};
var width = 20;
var height = 2.4;
console.log(rectangleArea(width, height));
