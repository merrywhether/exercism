class LinkNode {
  constructor(val, last, next) {
    this.val = val;
    this.last = last;
    this.next = next;
  }

  get next() { return this._next; }
  set next(node) {
    this._next = node;
    if (node && node.last !== this) node.last = this;
  }

  get last() { return this._last; }
  set last(node) {
    this._last = node;
    if (node && node.next !== this) node.next = this;
  }
}

class LinkedList {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
  }

  push(val) {
    if (this.tail) {
      if (this.tail === this.head) {
        this.tail = new LinkNode(val, this.head);
      } else {
        this.tail = this.tail.next = new LinkNode(val, this.tail);
      }
    } else {
      this.tail = this.head = new LinkNode(val);
    }
  }

  unshift(val) {
    if (this.head) {
      if (this.head === this.tail) {
        this.head = new LinkNode(val, undefined, this.tail);
      } else {
        this.head = this.head.last = new LinkNode(val, undefined, this.head);
      }
    } else {
      this.tail = this.head = new LinkNode(val);
    }
  }

  pop() {
    const target = this.tail;
    if (target) {
      const last = this.tail.last;
      if (last) {
        this.tail = last;
        last.next = undefined;
      } else {
        this.head = this.tail = undefined;
      }
      return target.val;
    }
  }

  shift() {
    const target = this.head;
    if (target) {
      const first = this.head.next;
      if (first) {
        this.head = first;
        first.last = undefined;
      } else {
        this.head = this.tail.undefined;
      }
      return target.val;
    }
  }

  count() {
    for (var i = 0, current = this.head; current; i++, current = current.next);
    return i;
  }

  delete(val) {
    for (var target = this.tail; target && target.val !== val; target = target.last);
    if (target === this.tail) {
      this.pop();
    } else if (target === this.head) {
      this.shift();
    } else if (target) {
      target.next.last = target.last;
    }
  }

  * [Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current;
      current = current.next;
    }
  }
}

module.exports = LinkedList;
