class Gigasecond {
  constructor(originalDate) {
    this.originalDate = originalDate;
  }

  date() {
    return new Date(this.originalDate.valueOf() + 1e12);
  }
}

module.exports = Gigasecond;
