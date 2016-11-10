function* rowRange(count) {
  for (let i = 0; i < count; i++) yield i;
}

function factorial(n) {
  return n < 2 ? 1 : n * factorial(n-1);
}

class Triangle {
  static row(rowNum) {
    return Array(rowNum+1).fill(undefined).map( (_, idx) =>
      factorial(rowNum) / (factorial(idx) * factorial(rowNum-idx)) );
  }

  constructor(height) {
    this.height = height;
  }

  get rows() {
    return [...rowRange(this.height)].map(Triangle.row);
  }

  get lastRow() {
    return Triangle.row(this.height-1);
  }
}

module.exports = Triangle;
