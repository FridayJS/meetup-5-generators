const asyncFn = (ms, data) =>
  new Promise(resolve => setTimeout(() => resolve(data), ms));

function executor(generator, yieldValue) {
  const next = generator.next(yieldValue);

  if (next.done) return generator;
  next.value.then(
    result => executor(generator, result),
    err => generator.throw(err)
  );
}

function* makeGenerator() {
  const r1 = yield asyncFn(100, 'foo');
  console.log('r1 --> ', r1);
  const r2 = yield asyncFn(1000, 'bar');
  console.log('r2 --> ', r2);
}

executor(makeGenerator());
