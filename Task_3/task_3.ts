const matrixA: number [][] = [[ 1, 2 ], [ 3, 4 ]];
const matrixB: number [][] = [[ 5, 6 ], [ 7, 8 ]];

function multiplyMatxes(matrixA: number[][], matrixB: number[][]): number[][] | string{
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;
  
    if (colsA !== rowsB) {
      return "Матрицы не удолетворяют условию для умножения.";
    }
    const result: number[][] = [];
  
    for (let i = 0; i < rowsA; i++) {
      result[i] = [];
      for (let j = 0; j < colsB; j++) {
        result[i][j] = 0;
        for (let k = 0; k < colsA; k++) {
          result[i][j] += matrixA[i][k] * matrixB[k][j];
        }
      }
    }
    return result;
  }
  
  console.log(multiplyMatxes(matrixA, matrixB));