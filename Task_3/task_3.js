var matrixA = [[1, 2], [3, 4]];
var matrixB = [[5, 6], [7, 8]];
function multiplyMatxes(matrixA, matrixB) {
    var rowsA = matrixA.length;
    var colsA = matrixA[0].length;
    var rowsB = matrixB.length;
    var colsB = matrixB[0].length;
    if (colsA !== rowsB) {
        return "Матрицы не удолетворяют условию для умножения.";
    }
    var result = [];
    for (var i = 0; i < rowsA; i++) {
        result[i] = [];
        for (var j = 0; j < colsB; j++) {
            result[i][j] = 0;
            for (var k = 0; k < colsA; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return result;
}
console.log(multiplyMatxes(matrixA, matrixB));
