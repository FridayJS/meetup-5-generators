const str = 'abc';
const arr = ['a', 'b', 'c'];
const typedArr = new Int16Array();
const map = new Map();
const set = new Set(['a', 'b', 'c']);
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

