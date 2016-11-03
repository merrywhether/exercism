class Series {
  constructor(input) {
    this.input = input;
  }

  get digits() {
    return [...this.input].map( d => parseInt(d) );
  }

  slices(count) {
    if (count > this.input.length) throw new Error('Slice size is too big.');

    return this.digits.map( (_, idx, array) => array.slice(idx, idx+count) )
                      .slice(0, count === 1 ? this.digits.length : -count+1);

  }
}

module.exports = Series;
