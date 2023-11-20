// 50. Write a TypeScript program to calculate the determinant of a 2x2 matrix.
const calculateDeterminant = (matrix: number[][]): number => {
    // Check if the matrix is 2x2
    if (matrix.length !== 2 || matrix[0].length !== 2 || matrix[1].length !== 2) {
        throw new Error("Invalid matrix size. The matrix must be a 2x2 matrix.")
    }

    // Calculate the determinant using the formula: det = (ad - bc)
    const [a, b] = matrix[0]
    const [c, d] = matrix[1]
    const determinant = ((a * d) - (c * b))
    return determinant

}

// Example usage:
const matrix2x2: number[][] = [
    [-2, -3],
    [4, -5],
];

try {
    const determinant = calculateDeterminant(matrix2x2);
    console.log(`Determinant of the 2x2 matrix: ${determinant}`);
} catch (error) {
    console.error(error.message);
}