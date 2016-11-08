function* primeCandidates(n) {
  const limit = Math.max(n*(Math.log(n) + Math.log(Math.log(n))), 14);
  for (let i = 3; i < limit; i += 2) {
    yield i;
  }
}

function pcIdx(i) {
  return (i - 3)/2;
}

const prime = {
  nth: (n) => {
    if (n === 0) throw new Error('Prime is not possible');
    if (n === 1) return 2; // hard-coding 2 allows total sieve space to be halved

    const candidates = [...primeCandidates(n)];
    candidates.forEach((val, idx) => {
      if (val !== undefined) {
        for (let i = 3*val, limit = candidates[candidates.length-1]; i <= limit; i += 2*val) {
          candidates[pcIdx(i)] = undefined;
        }
      }
    });
    return candidates.filter(x => x)[n-2];
  }
};

module.exports = prime;
