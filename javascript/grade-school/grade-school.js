class School {
  constructor() {
    this._roster = Object.create(null);
  }

  roster() {
    return this._roster;
  }

  add(student, grade) {
    this._roster[grade] = this._roster[grade] || [];
    this._roster[grade].push(student);
    this._roster[grade].sort();
  }

  grade(number) {
    return this._roster[number] ? this._roster[number] : [];
  }
}

module.exports = School;
