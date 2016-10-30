class Octal {
  constructor(base8) {
    this.base8 = base8;
    this.base10 = 0;
    if (/^[0-7]+$/.test(base8)) {
      this.base10 = [...base8].reverse()
                              .reduce( (sum, val, idx) => sum + val * Math.pow(8, idx), 0);
    }

  }

  toDecimal() {
    return this.base10;
  }
}

module.exports = Octal;
