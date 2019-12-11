const fail = (actual, expected)  => {
  // throw new assert.AssertionError({
  //   message: message,
  //   actual: actual,
  //   expected: expected,
  //   operator: operator,
  //   stackStartFunction: stackStartFunction
  // });
  console.error(
    `[\u2718] ${actual}`,
    `\n > should be: ${expected}`,
  );
}

const success = (actual) => {
  console.log(`[\u2714] ${actual}`);
}

const strictEqual = (actual, expected, message) => {
  if (actual !== expected) {
    fail(actual, expected);
  } else {
    success(actual);
  }
}

const deepEqual = (actual, expected) => {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    fail(actual, expected);
  } else {
    success(actual);
  }
}

module.exports = {
  strictEqual,
  deepEqual
}