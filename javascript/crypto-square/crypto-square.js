class Crypto {
  constructor(str) {
    this.str = str;
  }

  normalizePlaintext() {
    return this.str.replace(/\W/g, '').toLowerCase();
  }

  size() {
    return this.columns();
  }

  columns() {
    return Math.ceil(Math.sqrt(this.normalizePlaintext().length));
  }

  rows() {
    return Math.floor(Math.sqrt(this.normalizePlaintext().length));
  }

  plaintextSegments() {
    const segs = [];
    const normal = this.normalizePlaintext();
    const columns = this.columns();

    for (let i = 0; i <= columns * this.rows(); i += columns) {
      segs.push(normal.slice(i, i + columns));
    }

    return segs.filter( x => x);
  }

  ciphertext() {
    const segs = this.plaintextSegments();

    const text = [];
    for (let i = 0; i <= this.rows(); i++) {
      segs.forEach( (seg) => seg[i] ? text.push(seg[i]) : undefined );
    }
    return text.join('');
  }
}

module.exports = Crypto;
