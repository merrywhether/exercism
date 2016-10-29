class Acronyms {
  static parse(text) {
    return text.split(/\W+|[a-z](?=[A-Z])/g)
               .map( (word) => word[0].toUpperCase() )
               .join('');
  }
}

module.exports = Acronyms;
