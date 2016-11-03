class SecretHandshake {
  static get translation() {
    return ['wink', 'double blink', 'close your eyes', 'jump', 'reverse'];
  }

  constructor(code) {
    if (isNaN(code)) throw new Error('Handshake must be a number');
    this._commands = SecretHandshake.translation.filter( (_, idx) => code & 1 << idx);
  }

  commands() {
    return this._commands.includes('reverse') ? this._commands.slice(0, -1).reverse() : this._commands;
  }
}

module.exports = SecretHandshake;
