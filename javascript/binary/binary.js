class Binary {
  constructor(val) {
    this.val = val;
    this.decimal = /^[01]+$/.test(val) ?
                      val.split('')
                         .reverse()
                         .reduce( (sum, val, idx) => sum + parseInt(val) * Math.pow(2, idx), 0 )
                      : 0;
  }

  toDecimal() {
    return this.decimal;
  }
}

module.exports = Binary;
