class Pangram {
  constructor(text) {
    this.text = text;
  }

  isPangram() {
    const counter = new Set(
      this.text.toLowerCase()
               .replace(/[^a-z]/g, '')
    );
    return counter.size === 26;
  }
}

module.exports = Pangram;
