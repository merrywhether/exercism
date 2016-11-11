const DIGITS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
                'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
                'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const TENS = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const POWERS = [[1e9, 'billion'], [1e6, 'million'], [1e3, 'thousand'], [1e2, 'hundred']];

const say = {
  inEnglish: (num) => {
    if (num < 0 || num >= 1e12) throw new Error('Number must be between 0 and 999,999,999,999.');

    for (let [floor, word] of POWERS) {
      if (num >= floor) {
        const count = Math.floor(num/floor), rem = num % floor;
        const str = `${say.inEnglish(count)} ${word}`;
        return rem ? `${str} ${say.inEnglish(rem)}` : str;
      }
    }

    if (num >= 20) {
      const tens = Math.floor(num/10), rem = num - 10*tens;
      const str = TENS[tens-2];
      return rem ? `${str}-${say.inEnglish(rem)}` : str;
    }

    return DIGITS[num];
  }
};

module.exports = say;
