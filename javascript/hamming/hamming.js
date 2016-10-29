class Hamming {
  compute(strand1, strand2) {
    if (strand1.length !== strand2.length) {
      throw new Error('DNA strands must be of equal length.');
    }
    return strand1.split('')
                  .reduce(
                    ( (acc, letter, idx) => acc + (letter !== strand2[idx]) ),
                    0
                  );
  }
}

module.exports = Hamming;
