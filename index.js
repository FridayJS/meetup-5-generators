function* gen() {
  const res = yield 'Foo?';
  return res;
}

const generator = gen();
console.log(generator.next().value);
console.log(generator.next('YES').value);
