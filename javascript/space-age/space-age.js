class SpaceAge {

  static get planetDaysPerYear() {
    return {
      Mercury: 87.97,
      Venus: 224.7,
      Earth: 365.26,
      Mars: 686.98,
      Jupiter: 4332.82,
      Saturn: 10755.7,
      Uranus: 30687.15,
      Neptune: 60190.03
    };
  }

  constructor(seconds) {
    this.seconds = seconds;
    Object.keys(SpaceAge.planetDaysPerYear).forEach( (planet) => {
      this[`on${planet}`] = () =>
        parseFloat((this.seconds / 60 / 60 / 24 / SpaceAge.planetDaysPerYear[planet]).toFixed(2));
    });
  }
}

module.exports = SpaceAge;
