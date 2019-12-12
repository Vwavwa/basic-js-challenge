const consoleFontColorSuccess = '\x1b[34m';
const consoleFontColorFailed = '\x1b[31m';
const consoleFontColorNormal = '\x1b[0m';

const successMark = '\u2714';
const failedMark = '\u2718';

const fail = (actual, expected)  => {
  // throw new assert.AssertionError({
  //   message: message,
  //   actual: actual,
  //   expected: expected,
  //   operator: operator,
  //   stackStartFunction: stackStartFunction
  // });
  console.error(
    consoleFontColorFailed, `[${failedMark}]`,
    consoleFontColorNormal, { actual, expected }
  );
}

const success = (actual, expected) => {
  console.log(
    consoleFontColorSuccess, `[${successMark}]`,
    consoleFontColorNormal, { actual, expected });
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