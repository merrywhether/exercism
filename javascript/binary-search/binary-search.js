class BinarySearch {
  constructor(array) {
    for (let i = 1; i < array.length; i++)
      if (array[i] - array[i-1] < 0)
        return;
    this.array = array;
  }

  indexOf(val, startIdx = 0, endIdx = this.array.length -1) {
    while (startIdx <= endIdx) {
      const midIdx = Math.floor((endIdx+startIdx)/2);
      const midVal = this.array[midIdx];

      if (val < midVal) { endIdx = midIdx - 1; }
      else if (val > midVal) { startIdx = midIdx + 1; }
      else { return midIdx; }
    }
    return -1;
  }
}

module.exports = BinarySearch;
