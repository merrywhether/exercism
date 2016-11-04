class Series {
  constructor(series) {
    this.series = /[^\d]/.test(series) ? undefined : [...series].map( d => +d );
  }

  largestProduct(count) {
    if (!this.series || count < 0) throw new Error('Invalid input.');
    if (count > this.series.length) throw new Error('Slice size is too big.');
    if (count === 0) return 1;

    return Math.max(
      ...[...this.slices(count)].map( (slice) => slice.reduce( (product, val) => product * val ) )
    );
  }

  *slices(count) {
    for (let i = 0; i <= this.series.length - count; i++) yield this.series.slice(i, i+count);
  }
}

module.exports = Series;
