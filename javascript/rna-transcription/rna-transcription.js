class DnaTranscriber {
  static get transTable() {
    return {
      C: 'G',
      G: 'C',
      A: 'U',
      T: 'A'
    };
  }

  toRna(sequence) {
    return sequence.split('')
                   .map( (base) => DnaTranscriber.transTable[base] )
                   .join('');
  }
}

module.exports = DnaTranscriber;
