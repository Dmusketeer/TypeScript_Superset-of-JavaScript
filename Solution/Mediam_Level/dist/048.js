"use strict";
exports.__esModule = true;
var matrixAddition = function (matrixA, matrixB) {
    // Check if the matrices have the same dimensions
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        console.error("Matrices must have the same dimensions for addition");
        return null;
    }
    var result = [];
    for (var i = 0; i < matrixA.length; i++) {
        var row = [];
        for (var j = 0; j < matrixA[0].length; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(row);
    }
    return result;
};
var matrixA = [[1, 2], [3, 4]];
var matrixB = [[4, 5], [6, 7]];
var result = matrixAddition(matrixA, matrixB);
if (result !== null) {
    console.log("Matrix A:");
    console.log(matrixA);
    console.log("Matrix B:");
    console.log(matrixB);
    console.log("Result Matrix (A + B):");
    console.log(result);
}
