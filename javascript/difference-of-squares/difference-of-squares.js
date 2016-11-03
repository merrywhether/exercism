function* range (limit) { for (let i = 1; i <= limit; i++) yield i; }

class Squares {
  constructor(seed) {
    this.seed = seed;
  }

  get squareOfSums() {
    return Math.pow( Array.from(range(this.seed)).reduce( (sum, val) => sum + val ), 2);
  }

  get sumOfSquares() {
    return Array.from(range(this.seed)).reduce( (sum, val) => sum + Math.pow(val, 2) );
  }

  get difference() {
    return this.squareOfSums - this.sumOfSquares;
  }
}

module.exports = Squares;
