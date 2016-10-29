class Allergies {
  static get allergens() {
    return [
      'eggs',
      'peanuts',
      'shellfish',
      'strawberries',
      'tomatoes',
      'chocolate',
      'pollen',
      'cats'
    ];
  }

  constructor(code) {
    this.code = code;
  }

  list() {
    return Allergies.allergens.filter( (allergen, idx) => this.code & 1 << idx );
  }

  allergicTo(allergen) {
    return this.list().includes(allergen);
  }
}

module.exports = Allergies;
