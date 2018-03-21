function* makeGenerator() {
  yield* makeAnotherGenerator();
  yield 'Value from makeGenerator()';
}

function* makeAnotherGenerator() {
  yield 'First value from makeAnotherGenerator()';
  yield 'Second value from makeAnotherGenerator()';
}

console.log([...makeGenerator()]);
