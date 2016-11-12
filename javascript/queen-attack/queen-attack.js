class Queens {
  constructor({white: [wy, wx], black: [by, bx]} = {white: [0,3], black: [7,3]}) {
    if (wx === bx && wy === by)
      throw 'Queens cannot share the same space';

    this.wx = wx, this.wy = wy, this.bx = bx, this.by = by;
  }

  get white() { return [this.wy, this.wx]; }
  get black() { return [this.by, this.bx]; }

  toString() {
    const board = [...Array(8)].map(_ => Array(8).fill('_'));
    board[this.wy][this.wx] = 'W';
    board[this.by][this.bx] = 'B';
    return board.map(row => row.join(' ')).join('\n') + '\n';
  }

  canAttack() {
    return this.wx === this.bx || this.wy === this.by ||
           Math.abs((this.wx - this.bx) / (this.wy - this.by)) === 1;
  }
}

module.exports = Queens;
