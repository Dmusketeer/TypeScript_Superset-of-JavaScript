// 50. Write a TypeScript program to calculate the determinant of a 2x2 matrix.
var calculateDeterminant = function (matrix) {
    // Check if the matrix is 2x2
    if (matrix.length !== 2 || matrix[0].length !== 2 || matrix[1].length !== 2) {
        throw new Error("Invalid matrix size. The matrix must be a 2x2 matrix.");
    }
    // Calculate the determinant using the formula: det = (ad - bc)
    var _a = matrix[0], a = _a[0], b = _a[1];
    var _b = matrix[1], c = _b[0], d = _b[1];
    var determinant = ((a * d) - (c * b));
    return determinant;
};
// Example usage:
var matrix2x2 = [
    [-2, -3],
    [4, -5],
];
try {
    var determinant = calculateDeterminant(matrix2x2);
    console.log("Determinant of the 2x2 matrix: " + determinant);
}
catch (error) {
    console.error(error.message);
}
