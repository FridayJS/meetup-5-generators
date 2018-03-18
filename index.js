const str = 'abc';
const arr = ['a', 'b', 'c'];
const typedArr = new Int16Array();
const map = new Map();
const set = new Set();
const obj = new Object();

console.log(str[Symbol.iterator]);
console.log(arr[Symbol.iterator]);
console.log(typedArr[Symbol.iterator]);
console.log(typedArr[Symbol.iterator]);
console.log(map[Symbol.iterator]);
console.log(set[Symbol.iterator]);

console.log(obj[Symbol.iterator]); // undefined

try {
  for (let v of anotherObj) console.log(v); // throws an error
} catch (e) { console.log('ERROR'); }

const anotherObj = {
  [Symbol.iterator]: function* () { },
  foo: 1,
  bar: 2.14
};

for (let v of anotherObj) console.log(v);
