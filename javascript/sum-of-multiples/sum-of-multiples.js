class SumOfMultiples {
  constructor(factors) {
    this.factors = factors;
  }

  to(limit) {
    let multiples = new Set();
    this.factors.forEach( (factor) => {
      for (let i = factor; i < limit; i += factor) multiples.add(i);
    });
    return [...multiples.values()].reduce((sum, val) => sum + val, 0);
  }
}

module.exports = (factors) => new SumOfMultiples(factors);
