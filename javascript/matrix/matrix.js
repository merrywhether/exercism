class Matrix {
  constructor(matrix) {
    this.columns = [];
    this.rows = matrix
      .split('\n')
      .map((row, rowIdx) =>  {
        return row
          .split(' ')
          .map((char, colIdx) => {
            char = parseInt(char);
            const column = this.columns[colIdx] = this.columns[colIdx] || [];
            column[rowIdx] = char;
            return char;
          });
      });
  }
}

module.exports = Matrix;
