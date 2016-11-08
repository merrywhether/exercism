class Robot {
  static get bearings() {
    return ['north', 'east', 'south', 'west'];
  }

  get coordinates() {
    return [this.x, this.y];
  }

  orient(bearing) {
    if (!Robot.bearings.includes(bearing)) throw 'Invalid Robot Bearing';
    this.bearing = bearing;
  }

  turnRight() {
    this.bearing = Robot.bearings[(Robot.bearings.indexOf(this.bearing) + 1) % 4];
  }

  turnLeft() {
    this.bearing = Robot.bearings[(Robot.bearings.indexOf(this.bearing) + 3) % 4];
  }

  at(x, y) {
    [this.x, this.y] = [x, y];
  }

  advance() {
    switch(this.bearing) {
      case 'north':
        this.y++;
        break;
      case 'east':
        this.x++;
        break;
      case 'south':
        this.y--;
        break;
      case 'west':
        this.x--;
        break;
    }
  }

  instructions(ins) {
    return [...ins].map(i => ({L: 'turnLeft', R: 'turnRight', A: 'advance'})[i]);
  }

  place({x, y, direction}) {
    this.at(x, y);
    this.orient(direction);
  }

  evaluate(ins) {
    this.instructions(ins).forEach(i => this[i]());
  }
}

module.exports = Robot;
