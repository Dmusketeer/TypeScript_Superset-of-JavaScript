// 44. Write a TypeScript program to perform matrix multiplication.
type Matrix = number[][]
const multiplyMatrices = (matrixA: Matrix, matrixB: Matrix): Matrix | null => {
    const rowsA = matrixA.length
    const colsA = matrixA[0].length
    const rowsB = matrixB.length
    const colsB = matrixB[0].length

    if (colsA !== rowsB) {
        console.error("Matrix multiplication not possible. Number of columns in the first matrix must be equal to the number of rows in the second matrix.")
        return null
    }
    const result: Matrix = []
    //code goes here
    for (let i = 0; i < rowsA; i++) {
        result[i] = []
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j]
            }
            result[i][j] = sum
        }
    }
    return result
}


// Example usage:
const matrixA: Matrix = [
    [1, 2],
    [3, 4],
];
const matrixB: Matrix = [
    [5, 6],
    [7, 8],
];

const resultMatrix = multiplyMatrices(matrixA, matrixB);
if (resultMatrix !== null) {
    console.log("Matrix A:");
    console.log(matrixA);
    console.log("Matrix B:");
    console.log(matrixB);
    console.log("Result Matrix (A * B):");
    console.log(resultMatrix);
}

export { }