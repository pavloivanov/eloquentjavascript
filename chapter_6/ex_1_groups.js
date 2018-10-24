class Group {
  constructor (arr) {
      this.arr = arr;
  }

  static from (arr) {
    return new Group(arr);
  }

  has (val) {
    return this.arr.includes(val);
  }

  add (val) {
    const index = this.arr.indexOf(val);
    
    if (index === -1) {
        this.arr.push(val);
    }
        
    console.log(this.arr);
  }

  delete (val) {
    const index = this.arr.indexOf(val);
    
    if (index !== -1) {
        this.arr.splice(index, 1);
    }
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false