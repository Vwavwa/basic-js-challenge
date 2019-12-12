const fail = (actual, expected)  => {
  // throw new assert.AssertionError({
  //   message: message,
  //   actual: actual,
  //   expected: expected,
  //   operator: operator,
  //   stackStartFunction: stackStartFunction
  // });
  console.error(
    '[\u2718]',
    {
      actual,
      expected
    },
  );
}

const success = (actual, expected) => {
  console.log('[\u2714]', { actual, expected });
}

const strictEqual = (actual, expected, message) => {
  if (actual !== expected) {
    fail(actual, expected);
  } else {
    success(actual, expected);
  }
}

const deepEqual = (actual, expected) => {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    fail(actual, expected);
  } else {
    success(actual, expected);
  }
}

module.exports = {
  strictEqual,
  deepEqual
}