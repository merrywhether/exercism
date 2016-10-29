class CircularBuffer {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.store = [];
    this.read = this.read.bind(this);
    this.clear = this.clear.bind(this);
  }

  read() {
    if (this.store.length) {
      return this.store.shift();
    } else {
      throw new BufferEmptyException();
    }
  }

  forceWrite(val) {
    if (val && this.store.length >= this.maxSize) {
      this.store.shift();
      this.store.push(val);
    } else {
      this.write(val);
    }
  }

  write(val) {
    if (!val) {
      return;
    } else if (this.store.length < this.maxSize) {
      this.store.push(val);
    } else {
      throw new BufferFullException();
    }
  }

  clear() {
    this.store = [];
  }
}

class BufferEmptyException extends Error {}

class BufferFullException extends Error {}

module.exports = {
  circularBuffer: (size) => new CircularBuffer(size),
  bufferEmptyException: () => new BufferEmptyException(),
  bufferFullException: () => new BufferFullException()
};
