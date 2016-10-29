const BigInt = require('./big-integer');

class Grains {
  square(num) {
    return BigInt(2).pow(num - 1).toString();
  }

  total() {
    return BigInt(2).pow(64).subtract(1).toString();
  }
}

module.exports = Grains;
