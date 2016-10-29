class Clock {
  static at(hour, minute) {
    return new Clock(hour, minute);
  }

  constructor(hour, minute) {
    this.hour = hour;
    this.minute = minute || 0;
  }

  plus(minute) {
    this.minute += minute;
    return this;
  }

  minus(minute) {
    this.minute -= minute;
    return this;
  }

  equals(clock) {
    return this.toString() === clock.toString();
  }

  toString() {
    let hours = this.hour;
    let minutes = this.minute;

    hours += Math.floor(minutes / 60);

    minutes = (minutes % 60 + 60) % 60;
    hours = (hours % 24 + 24) % 24;

    return `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}`;
  }
}

module.exports = Clock;
