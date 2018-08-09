const arr = ["derp", 1, 'poop', {obj: "nice"}];

Array.prototype.altIncludes = function(item) {
  return this.indexOf(item) !== -1;
}

arr.altIncludes("derp");

Array.prototype.altIndexOf = function(item) {
  let index = -1;
  for(let i = 0; i < this.length; i++) {
    if(item === this[i]) {
      index = i;
    }
  }
  return index; 
}

arr.altIndexOf('poopd');
arr.altIndexOf('poop');

Array.prototype.altForEach = function(cb) {
  for(let i = 0; i < this.length; i++) {
    this[i] = cb(this[i], i, this);
  }
  return this;
}

arr.altForEach(thing => thing + "hello");

Array.prototype.altMap = function(cb) {
  let arr = [];
  for(let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }
  return arr;
}

const mappedArr = arr.altMap(item => item + "Hello");
console.log({mappedArr});

Array.prototype.altFilter = function(cb) {
  let arr = [];
  for(let i = 0; i < this.length; i++) {
    if(cb(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
}

const filteredArr = arr.altFilter(item => typeof item === "string");
console.log({filteredArr});

Array.prototype.altReduce = function(cb, acc = 0) {
  for(let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i], i, this)
  }
  return acc;
}

const arr2 = [['a', 'k', 'b'],['d','F',' '],['g', 'H', 'X']];
function sorter(arr) {
  return arr.altReduce((acc, cur) => ([...acc, ...cur])).sort();
}

sorter(arr2);