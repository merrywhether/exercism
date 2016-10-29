class Words {
  count(phrase) {
    const counts = Object.create(null);
    phrase.trim()
          .split(/\s+/)
          .forEach( (word) => {
            const normalizedWord = word.toLowerCase();
            counts[normalizedWord] = counts[normalizedWord] + 1 || 1;
          });
    return counts;
  }
}

module.exports = Words;
