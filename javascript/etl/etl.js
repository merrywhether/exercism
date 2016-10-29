class ETL {
  transform(obj) {
    const ret = {};
    Object.keys(obj).forEach( (key) => {
      obj[key].forEach( (val) => ret[val.toLowerCase()] = parseInt(key) );
    });
    return ret;
  }
}

module.exports = ETL;
