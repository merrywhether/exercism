class PhoneNumber {
  constructor(original) {
    this.original = original;
  }

  number() {
    let input = this.original.replace(/[^0-9]/g, '');

    if (input.length === 11) {
      if (input[0] === '1') {
        input = input.slice(1);
      }
    }

    if (input.length !== 10) {
      input = '0000000000';
    }

    return input;
  }

  areaCode() {
    return this.number().slice(0, 3);
  }

  first() {
    return this.number().slice(3, 6);
  }

  last() {
    return this.number().slice(6);
  }

  toString() {
    return `(${this.areaCode()}) ${this.first()}-${this.last()}`;
  }
}

module.exports = PhoneNumber;
