const atbash = {
  encode: (str) => {
    return str.toLowerCase()
              .split('')
              .map( (letter) => {
                const charCode = letter.charCodeAt(0);

                if (48 <= charCode && charCode <= 57) { // numbers
                  return letter;
                } else if (97 <= charCode && charCode <= 122) { // letters
                  return String.fromCharCode(219 - charCode);
                } else {
                  return undefined;
                }
              })
              .filter( l => l )
              .reduce( (output, letter, idx) => {
                return output.concat( (idx % 5 || idx === 0) ? letter : ` ${letter}` );
              }, '');
  }
}

module.exports = atbash;
