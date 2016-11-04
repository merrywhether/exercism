class Flattener {
  flatten(array) {
    let result = [];
    array.forEach( (term) => {
      const next = term instanceof Array ? this.flatten(term) : term;
      if (next != undefined) result = result.concat(next);
    });
    return result;
  }
}

module.exports = Flattener;
