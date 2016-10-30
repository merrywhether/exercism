class Luhn {
  static create(number) {
    const luhn = new Luhn(number);
    luhn.digits.unshift(10 - (luhn._checksum(1) % 10));
    return luhn.number;
  }

  constructor(number) {
    this.digits = [...number.toString()].map( x => parseInt(x)).reverse();
  }

  get checkDigit() {
    return this.digits[0];
  }

  _addends(shift=0) {
    return this.digits
               .map( (val, idx) => {
                 if ((idx+shift) % 2) {
                   val *= 2;
                   return val > 10 ? val - 9 : val;
                 } else {
                   return val;
                 }
               })
               .reverse();
  }

  get addends() {
    return this._addends();
  }

  _checksum(shift=0) {
    return this._addends(shift).reduce( (sum, val) => sum + val);
  }

  get checksum() {
    return this._checksum();
  }

  get valid() {
    return this.checksum % 10 === 0;
  }

  get number() {
    return parseInt(this.digits.reverse().join(''))
  }
}

module.exports = Luhn;
