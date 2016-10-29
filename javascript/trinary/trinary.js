class Trinary {
  constructor(base3) {
    this.base3 = base3;
    this.base10 = 0;
    if (/^[0-2]+$/.test(base3)) {
      this.base10 = [...base3].reverse()
                              .reduce( (sum, val, idx) => sum + val * Math.pow(3, idx), 0);
    }

  }

  toDecimal() {
    return this.base10;
  }
}

module.exports = Trinary;
