"use strict";
exports.__esModule = true;
var multiplyMatrices = function (matrixA, matrixB) {
    var rowsA = matrixA.length;
    var colsA = matrixA[0].length;
    var rowsB = matrixB.length;
    var colsB = matrixB[0].length;
    if (colsA !== rowsB) {
        console.error("Matrix multiplication not possible. Number of columns in the first matrix must be equal to the number of rows in the second matrix.");
        return null;
    }
    var result = [];
    //code goes here
    for (var i = 0; i < rowsA; i++) {
        result[i] = [];
        for (var j = 0; j < colsB; j++) {
            var sum = 0;
            for (var k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
};
// Example usage:
var matrixA = [
    [1, 2],
    [3, 4],
];
var matrixB = [
    [5, 6],
    [7, 8],
];
var resultMatrix = multiplyMatrices(matrixA, matrixB);
if (resultMatrix !== null) {
    console.log("Matrix A:");
    console.log(matrixA);
    console.log("Matrix B:");
    console.log(matrixB);
    console.log("Result Matrix (A * B):");
    console.log(resultMatrix);
}
