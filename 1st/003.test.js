/**
--------------------
String Manipulators!
--------------------

Buatlah beberapa function berikut:

1. addTitle, yang menerima 4 parameter yaitu `name1`, `name2`, `name3` dan `name4`.
   Function akan menambahkan 'Mr. ' dan ', ' pada setiap nama dan mengembalikan nilai tersebut.
   Contoh:
   - input: addTitle('Steve Fox', 'Jin Kazama', 'Eddie Gordo', 'Geese Howard')
     output: 'Mr. Steve Fox, Mr. Jin Kazama, Mr. Eddie Gordo, Mr. Geese Howard'

2. changeSpacesWith, yang menerima 2 parameter yaitu `str` dan `to`.
   Function akan mengganti spasi di `str` dengan nilai yang kita berikan lewat parameter `to`
   dan mengembalikan nilai tersebut.
   Contoh:
   - input: changeSpacesWith('Steve Fox', '-')
     output: 'Steve-Fox'
   - input: changeSpacesWith('Sergei Dragunov', '+')
     output: 'Sergei+Dragunov'

3. cutString, yang menerima 1 parameter yaitu `str`.
   Function akan memotong string supaya tersisa 6 karakter dan mengembalikan nilai tersebut.
   Contoh:
   - input: cutString('Kazuya Mishima')
     output: 'Kazuya'
   - input: cutString('Sergei Dragunov')
     output: 'Sergei'
   - input: cutString('Dimitri W')
     output: 'Dimitr'

RULES:
- Dilarang menggunakan regex
- Dilarang menggunakan slice, split, splice, substring

*/
// var array =['Steve Fox','Jin Kazama','Eddie Gordo', 'Geese Howard']

const assert = require('../assert');

const { addTitle, changeSpacesWith, cutString } = require('./003');

function runTestAddTitle() {
  const actual1 = addTitle('Steve Fox', 'Jin Kazama', 'Eddie Gordo', 'Geese Howard');
  const expected1 = 'Mr. Steve Fox, Mr. Jin Kazama, Mr. Eddie Gordo, Mr. Geese Howard';
  assert.strictEqual(actual1, expected1);

  const actual2 = addTitle('Jonathan', 'Joseph', 'Jotaro', 'Josuke');
  const expected2 = 'Mr. Jonathan, Mr. Joseph, Mr. Jotaro, Mr. Josuke';
  assert.strictEqual(actual2, expected2);

  const actual3 = addTitle('Giorno', 'Buciarrati', 'Narancia', 'Abbachio');
  const expected3 = 'Mr. Giorno, Mr. Buciarrati, Mr. Narancia, Mr. Abbachio';
  assert.strictEqual(actual3, expected3);
}

function runTestChangeSpacesWith() {
  assert.strictEqual(changeSpacesWith('Steve Fox', '-'), 'Steve-Fox');
  assert.strictEqual(changeSpacesWith('Sergei Dragunov', '+'), 'Sergei+Dragunov');
  assert.strictEqual(changeSpacesWith('Alisa Bosconovich', ''), 'AlisaBosconovich');
  assert.strictEqual(changeSpacesWith('Kuma', 'x'), 'Kuma');
}

function runTestCutString() {
  assert.strictEqual(cutString('Kazuya Mishima'), 'Kazuya');
  assert.strictEqual(cutString('Sergei Dragunov'), 'Sergei');
  assert.strictEqual(cutString('Dimitri W'), 'Dimitr');
}

runTestAddTitle();
runTestChangeSpacesWith();
runTestCutString();
