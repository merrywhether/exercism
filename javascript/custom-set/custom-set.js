class CustomSet {
  constructor(array = []) {
    this.set = array.reduce( (agg, num) => {
      agg[num] = true;
      return agg;
    }, {});
  }

  add(num) {
    this.set[num] = true;
    return this;
  }

  delete(num) {
    delete this.set[num];
    return this;
  }

  clear() {
    this.set = {};
    return this;
  }

  toList() { return Object.keys(this.set).map(n => parseInt(n)); }

  size() { return this.toList().length; }
  empty() { return this.size() === 0; }

  contains(num) { return !!this.set[num]; }

  subset(set) { return this.compare(set, (agg, num) => agg && this.contains(num), true); }
  disjoint(set) { return this.compare(set, (agg, num) => agg && !this.contains(num), true); }
  eql(set) { return this.subset(set) && set.subset(this); }
  difference(set) { return new CustomSet(this.toList().filter(n => !set.contains(n))); }
  union(set) { return new CustomSet(this.toList().concat(set.toList())); }

  intersection(set) {
    return new CustomSet(
      this.compare(set, (agg, num) => {
        if (this.contains(num)) agg.push(num);
        return agg;
      }, [])
    );
  }

  compare(set, func, defalt) {
    const test = set.reduce(func, defalt);
    return (test == undefined) ? defalt : test;
  }

  reduce(func, seed) { return this.toList().reduce(func, seed); }
}

module.exports = CustomSet;
