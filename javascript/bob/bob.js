class Bob {
  hey(prompt) {
    if (prompt.toUpperCase() === prompt && prompt.toLowerCase() !== prompt) {
      return 'Whoa, chill out!';
    } else if (prompt.slice(-1) === '?') {
      return 'Sure.'
    } else if (prompt.trim()) {
      return 'Whatever.';
    } else {
      return 'Fine. Be that way!';
    }

  }
}

module.exports = Bob;
