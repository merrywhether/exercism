class Sieve {
  constructor(limit) {
    this.limit = limit;
  }

  get primes() {
    const candidates = Array(this.limit - 1).fill(0).map( (val, idx) => idx + 2);
    candidates.forEach( (val, idx, array) => {
      if (val) {
        for (let i = idx + val; i < this.limit - 1; i += val) {
          candidates[i] = undefined;
        }
      }
    });
    return candidates.filter( x => x );
  }
}

module.exports = Sieve;
