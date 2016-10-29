const strain = {
  keep: (array, func) => {
    // return array.filter(func);
    return array.reduce( (agg, val) => {
      if (func(val)) agg.push(val);
      return agg;
    }, []);
  },
  discard: (array, func) => {
    return array.reduce( (agg, val) => {
      if (!func(val)) agg.push(val);
      return agg;
    }, []);
  }
};

module.exports = strain;
