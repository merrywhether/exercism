class Palindromes {
  constructor({ maxFactor, minFactor = 1}) {
    this.maxFactor = maxFactor;
    this.minFactor = minFactor;
  }

  generate() {
    this._largest = this.findPalindrome(-Infinity, (value, max) => value > max);
    this._smallest = this.findPalindrome(Infinity, (value, min) => value < min);
  }

  findPalindrome(seed, testFunc) {
    let target = seed;
    for (let i = this.maxFactor; i >= this.minFactor; i--) {
      for (let j = i; j >= this.minFactor; j--) {
        const value = j * i;
        if (value.toString() === [...value.toString()].reverse().join('') && testFunc(value, target))
          target = value;
      }
    }
    return { value: target, factors: this.findFactors(target) };
  }

  findFactors(val) {
    const factors = [];
    for (let k = this.minFactor; k <= Math.min(Math.sqrt(val), this.maxFactor); k++) {
      if (val % k === 0 && val/k >= this.minFactor && val/k <= this.maxFactor)
        factors.push([k, val/k]);
    }
    return factors;
  }

  largest() {
    return this._largest;
  }

  smallest() {
    return this._smallest;
  }
}


module.exports = Palindromes;
