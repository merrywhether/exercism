class Bst {
  constructor(val) {
    this.data = val;
    this.left = undefined;
    this.right = undefined;
  }

  insert(val) {
    if(val <= this.data) {
      if (this.left) {
        this.left.insert(val);
      } else {
        this.left = new Bst(val);
      }
    } else {
      if (this.right) {
        this.right.insert(val);
      } else {
        this.right = new Bst(val);
      }
    }
  }

  each(func) {
    if (this.left) this.left.each(func);
    func(this.data);
    if (this.right) this.right.each(func);

  }
}

module.exports = Bst;
