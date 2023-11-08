// 22. Create a TypeScript function to calculate the area of a circle.
function calculateCircleArea(radius) {
    var area = Math.PI * (Math.pow(radius, 2));
    return area;
}
// Example usage:
var radius = 5; // Replace with your desired radius
var area = calculateCircleArea(radius);
console.log("The area of the circle with radius " + radius + " is " + area);
