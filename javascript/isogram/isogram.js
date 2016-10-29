class Isogram {
  constructor(word) {
    this.word = word;
  }

  isIsogram() {
    const normalizedWord = this.word.replace(/[ \-]/g, '');
    const tracker = new Set(normalizedWord.toLowerCase());
    return tracker.size === normalizedWord.length;
  }
}

module.exports = Isogram;
