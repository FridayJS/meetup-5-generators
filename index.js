const asyncFn = (ms, data) =>
  new Promise(resolve => setTimeout(() => resolve(data), ms));

function executor(generator, yieldValue) {
  /** EXECUTOR CODE HERE */
}

function* makeGenerator() {
  /** GENERATOR CODE HERE */
}

executor(makeGenerator());
