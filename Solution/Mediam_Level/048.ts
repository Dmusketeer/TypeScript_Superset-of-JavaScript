// 48. Implement a TypeScript program to perform matrix addition.
type Matrix = number[][]

const matrixAddition = (matrixA: Matrix, matrixB: Matrix): Matrix | null => {
    // Check if the matrices have the same dimensions
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        console.error("Matrices must have the same dimensions for addition")
        return null
    }

    const result: Matrix = []
    for (let i = 0; i < matrixA.length; i++) {
        const row: number[] = []
        for (let j = 0; j < matrixA[0].length; j++) {
            row.push(matrixA[i][j] + matrixB[i][j])
        }
        result.push(row)
    }
    return result
}

const matrixA: Matrix = [[1, 2], [3, 4]]
const matrixB: Matrix = [[4, 5], [6, 7]]

const result = matrixAddition(matrixA, matrixB)

if (result !== null) {
    console.log("Matrix A:");
    console.log(matrixA);
    console.log("Matrix B:");
    console.log(matrixB);
    console.log("Result Matrix (A + B):");
    console.log(result);
}

export { }