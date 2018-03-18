function* makeGenerator() {
  yield 1;
  yield 2;
  yield 'foo';
  return 'bar';
}

const generator = makeGenerator();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next()); // done
console.log(generator.next()); 

