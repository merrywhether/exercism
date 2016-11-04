class ArgumentError extends Error {}

class WordProblem {
  static translate(term) {
    return {
      'plus': '+',
      'minus': '-',
      'multiplied by': '*',
      'divided by': '/'
    }[term];
  }

  constructor(question) {
    this.question = question;
  }

  answer() {
    let result = this.question.replace(/^.*?(-?\d.+\d)\?$/, '$1')
                              .replace(/[a-z]+(?: [a-z]+)?/g, WordProblem.translate);

    if (/[a-z]/.test(result)) throw new ArgumentError();

    while (isNaN(result))
      result = result.replace(/-?\d+ [+\-*\/] -?\d+/, (opPair) => eval(opPair) );

    return +result;
  }
}

module.exports = { WordProblem, ArgumentError };
