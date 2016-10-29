class Raindrops {

  convert(val) {
    let output = '';

    if (val % 3 === 0) output += 'Pling';
    if (val % 5 === 0) output += 'Plang';
    if (val % 7 === 0) output += 'Plong';

    return output || val.toString();
  }
}

module.exports = Raindrops;
