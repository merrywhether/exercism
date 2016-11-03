class Triplet {

  static where({maxFactor, minFactor=3, sum}) {
    const winners = [];
    for (let i = minFactor + 2; i <= maxFactor; i++) {
      for (let j = minFactor - 1; j < i; j++) {
        for (let k = minFactor; k < j; k++) {
          const testTriplet = new Triplet(k, j, i);
          if (testTriplet.isPythagorean() && (!sum || testTriplet.sum() === sum)) {
            winners.push(testTriplet);
          }
        }
      }
    }
    return winners;
  }

  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toString() {
    return `Triplet - Side A: ${this.a}, Side B: ${this.b}, Side C: ${this.c}`;
  }

  sum() {
    return this.a + this.b + this.c;
  }

  product() {
    return this.a * this.b * this.c;
  }

  isPythagorean() {
    return Math.pow(this.a, 2) + Math.pow(this.b, 2) === Math.pow(this.c, 2);
  }
}

module.exports = Triplet;
