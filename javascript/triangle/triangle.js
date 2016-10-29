class Triangle {
  constructor(...sides) {
    this.sides = sides.sort( (a,b) => a > b );
  }

  kind() {
    const [a, b, c] = this.sides;
    if (a <= 0) {
      throw Error('All sides must be positive.');
    } else if (a + b <= c) {
      throw Error('Side lengths do not form a closed triangle.');
    } else if (a === c) {
      return 'equilateral';
    } else if (a === b || b === c) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}

module.exports = Triangle;
