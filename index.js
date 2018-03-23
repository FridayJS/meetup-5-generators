function* makeGenerator() {
  const res = yield 'Foo?';
  return res;
}

const generator = makeGenerator();
console.log(generator.next().value);
console.log(generator.next('YES').value);
