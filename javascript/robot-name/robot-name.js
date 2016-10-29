class Robot {

  static letterGen() {
    return Math.floor(Math.random()*26) + 65;
  }

  static prefixGen() {
    return String.fromCharCode( Robot.letterGen(), Robot.letterGen() );
  }

  static numGen() {
    return ('000' + Math.floor(Math.random() * 1000)).slice(-3);
  }

  static nameGen() {
    let name = Robot.prefixGen() + Robot.numGen();
    this._names = this._names || new Set();

    while( this._names.has(name) ) {
      name = Robot.prefixGen() + Robot.numGen();
    }

    this._names.add(name);

    return name;
  }

  constructor() {
    this.name = Robot.nameGen();
  }

  reset() {
    this.name = Robot.nameGen();
  }
}

module.exports = Robot;
