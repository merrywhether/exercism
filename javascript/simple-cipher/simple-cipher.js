class Cipher {
  static randomKey() {
    return [...Array(10)]
              .map( _ => String.fromCharCode(97 +  Math.floor(Math.random() * 26)))
              .join('');
  }

  constructor(key) {
    if (key == undefined) {
      this.key = Cipher.randomKey();
    } else if (/^[a-z]+$/.test(key)) {
      this.key = key;
    } else {
      throw new Error('Bad key');
    }
  }

  encode(input) {
    return String.fromCharCode(...[...input].map( (letter, idx) => {
      return 97 + (letter.charCodeAt(0) + this.key.charCodeAt(idx % this.key.length) - 194) % 26;
    }));
  }

  decode(input) {
    return String.fromCharCode(...[...input].map( (letter, idx) => {
      return 97 + (letter.charCodeAt(0) - this.key.charCodeAt(idx % this.key.length) + 26) % 26;
    }));
  }
}

module.exports = Cipher;
