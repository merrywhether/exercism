class Matrix {
  constructor(input) {
    this.columns = [];
    this.rows = input.split('\n')
      .map( (row, rowIdx) => {
        return row.split(' ')
          .map( (num, colIdx) => {
            num = parseInt(num);
            this.columns[colIdx] = this.columns[colIdx] || [];
            this.columns[colIdx][rowIdx] = num;
            return num;
          });
      });

    const rowMaxs = this.rows.map((row) => Math.max(...row));
    const colMins = this.columns.map((col) => Math.min(...col));

    this.saddlePoints = [];
    this.rows.forEach( (row, rowIdx) => {
      row.forEach( (num, colIdx) => {
        if (num === rowMaxs[rowIdx] && num === colMins[colIdx])
          this.saddlePoints.push([rowIdx, colIdx]);
      });
    });
  }
}

module.exports = Matrix;
