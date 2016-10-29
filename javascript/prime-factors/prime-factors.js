class PrimeFactors {
  static for(val) {
    let factors = [];

    for (let i = 2; val > 1; i++) {
      for ( ; val % i === 0; val /= i) {
        factors.push(i);
      }
    }

    return factors;
  }
}

module.exports = PrimeFactors;
