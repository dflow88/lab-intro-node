class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }


  add(item) {
    if (typeof item === 'number' || typeof item === 'string') {
    this.items.push(item);
    this.items.sort((a,b)=>a-b)
    this.length = this.items.length
    }
  }

  get(pos) {
      if (pos <= this.length -1 && pos >=0) {
        return this.items[pos]
      }
    throw new Error("OutOfBounds")
  }


  max() {
    if (this.length > 0) {
      let max = Math.max(...this.items)
      return max
    } else {
      throw new Error('EmptySortedList')
    }
  }

  min() {
    if (this.items.length > 0) {
      let min = Math.min(...this.items)
      return min
    } else {
      throw new Error('EmptySortedList')
    }
  }

  sum() {
    let sum = 0
    if (this.length > 0) {
      for (let i = 0; i < this.items.length; i++) {
        sum += this.items[i]
      } return sum
    } else {
      return 0
    }
  }

  avg() {
    let avg = 0
    let sum = 0
    if (this.length > 0) {
      for (let i = 0; i < this.items.length; i++) {
        sum += this.items[i]
      } avg = sum/(this.length)
      return avg
    } else {
      throw new Error('EmptySortedList')
    }
  }


}

module.exports = SortedList;


const list = new SortedList([0,2,3])