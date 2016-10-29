function titlecase(word) {
  return word[0].toUpperCase() + word.slice(1);
}

class BeerSong {

  static pluralized(count) {
    if (count === 1) {
      return '1 bottle';
    } else {
      return `${count ? count : 'no more'} bottles`;
    }
  }

  static refrain(count) {
    if (count) {
      return `Take ${count === 1 ? 'it' : 'one'} down and pass it around`;
    } else {
      return 'Go to the store and buy some more';
    }
  }

  verse(count) {
    const pluralized = BeerSong.pluralized(count);
    const refrain = BeerSong.refrain(count);
    const newPluralized = BeerSong.pluralized( (count+99) % 100 );
    return `${titlecase(pluralized)} of beer on the wall, ${pluralized} of beer.\n${refrain}, ${newPluralized} of beer on the wall.\n`;
  }

  sing(start, end) {
    end = end || 0;
    const verses = [];
    for (let i = start; i >= end; i--) {
      verses.push(this.verse(i));
    }
    return verses.join('\n');
  }
}

module.exports = BeerSong;
