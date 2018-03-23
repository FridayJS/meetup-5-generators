class RangeIterator {
  constructor(start, stop) {
    this.value = start;
    this.stop = stop;
  }

  [Symbol.iterator]() { return this; }

  next() {
    var value = this.value;
    if (value <= this.stop) {
      this.value++;
      return { done: false, value };
    } else {
      return { done: true };
    }
  }
}

function range(start, stop) {
  return new RangeIterator(start, stop);
}

console.log(...range(50, 55));
