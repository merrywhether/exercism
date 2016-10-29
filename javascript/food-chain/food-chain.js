class FoodChain {
  static intro() {
    return 'I know an old lady who swallowed a';
  }

  static explaner(a, b) {
    return `\nShe swallowed the ${a} to catch the ${b}`;
  }

  static outro(count) {
    if (count === 8) {
      return '\nShe\'s dead, of course!\n';
    }
    return '\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
  }

  static middle(count) {
    switch(count) {
      case 1:
        return 'fly.';
      case 2:
        return 'spider.\nIt wriggled and jiggled and tickled inside her.';
      case 3:
        return 'bird.\nHow absurd to swallow a bird!';
      case 4:
        return 'cat.\nImagine that, to swallow a cat!';
      case 5:
        return 'dog.\nWhat a hog, to swallow a dog!';
      case 6:
        return 'goat.\nJust opened her throat and swallowed a goat!';
      case 7:
        return 'cow.\nI don\'t know how she swallowed a cow!';
      case 8:
        return 'horse.';
    }
  }

  static explanation(count) {
    let explanation = '';
    switch(count) {
      case 7:
        explanation += `${FoodChain.explaner('cow', 'goat')}.`;
      case 6:
        explanation += `${FoodChain.explaner('goat', 'dog')}.`;
      case 5:
        explanation += `${FoodChain.explaner('dog', 'cat')}.`;
      case 4:
        explanation += `${FoodChain.explaner('cat', 'bird')}.`;
      case 3:
        explanation += `${FoodChain.explaner('bird', 'spider')} that wriggled and jiggled and tickled inside her.`;
      case 2:
        explanation += `${FoodChain.explaner('spider', 'fly')}.`;
      default:
        return explanation;
    }
  }

  verse(count) {
    return `${FoodChain.intro()} ${FoodChain.middle(count)}${FoodChain.explanation(count)}${FoodChain.outro(count)}`;
  }

  verses(start, stop) {
    let song = [];
    for (let i = start; i <= stop; i++) {
      song.push(this.verse(i));
    }
    return song.join('\n') + '\n';
  }
}

module.exports = FoodChain;
