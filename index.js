function* gen() {
  try {
  const error = yield 9;
  } catch(e) {
    console.log('ERROR ->> ', e);
  }
}

const _gen = gen();
console.log(_gen.next());

_gen.throw('SOME ERROR');
