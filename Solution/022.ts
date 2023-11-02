// 22. Create a TypeScript function to calculate the area of a circle.
function calculateCircleArea(radius: number): number {
    const area = Math.PI * (radius ** 2);
    return area;
}

// Example usage:
const radius = 5; // Replace with your desired radius
const area = calculateCircleArea(radius);
console.log(`The area of the circle with radius ${radius} is ${area}`);
