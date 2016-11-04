class Hexadecimal {
  static translate(term) {
    const val = parseInt(term);
    return isNaN(val) ? term.charCodeAt(0) - 87 : val;
  }

  constructor(base16) {
    this.base16 = base16;
    this.base10 = /[^0-9a-f]/.test(base16) ? 0 :
      [...base16].reduce( (sum, val) => 16 * sum + Hexadecimal.translate(val), 0);
  }

  toDecimal() {
    return this.base10;
  }
}

module.exports = Hexadecimal;
