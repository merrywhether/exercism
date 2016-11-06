class Garden {
  static get defaultStudents() {
    return ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fred', 'Ginny',
            'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry'];
  }

  static plant(plant) {
    return {
      'R': 'radishes',
      'C': 'clover',
      'G': 'grass',
      'V': 'violets'
    }[plant];
  }

  constructor(diagram, students = Garden.defaultStudents) {
    students = students.slice().sort().map( s => s.toLowerCase() );
    students.forEach( (student) => this[student] = [] );
    diagram.split(/\s/).forEach( (row) => {
      [...row].forEach( (plant, idx) => this[students[Math.floor(idx/2)]].push(Garden.plant(plant)) );
    });
  }
}

module.exports = Garden;
