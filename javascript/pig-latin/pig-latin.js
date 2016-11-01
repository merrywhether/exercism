const pigLatin = {
  translate: str => str.replace(/\w+/g,
               word => word.replace(/^(.*?qu|[^aeiou]+)?(\w+)$/, '$2$1ay')
             )
};

module.exports = pigLatin;
