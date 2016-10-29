class Anagram {
  static sortLetters(word) {
    return word.toLowerCase().split('').sort().join('');
  }

  constructor(word) {
    this.word = word;
    this.wordTest = Anagram.sortLetters(word);
  }

  matches(...matchesList) {
    return matchesList.reduce( ((agg, val) => agg.concat(val)), [] )
                      .filter( (word) =>
                        Anagram.sortLetters(word) === this.wordTest &&
                        word.toLowerCase() !== this.word.toLowerCase()
                      );
  }
}

module.exports = Anagram;
