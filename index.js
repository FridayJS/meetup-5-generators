function* makeGenerator() {
  try {
  const error = yield 9;
  } catch(e) {
    console.log('ERROR ->> ', e);
  }
}

const generator = makeGenerator();
console.log(generator.next());

generator.throw('SOME ERROR');
