/**
=========================
Array Mastery: Add Titles
=========================

[INSTRUKSI]

Function addTitle akan menerima satu parameter berupa array data orang dan akan menambahkan
title (Mr. / Ms. / Mrs.) kepada setiap orang yang ada di dalam array tersebut.

Akan diberikan 3 elemen di setiap array:
1. Name
2. Gender ('male'/'female')
3. Married (true/false)

Jika gender = 'male', maka tambahkan 'Mr.' sebelum name
Jika gender = 'female' dan married = true, maka tambahkan 'Mrs.' sebelum name
Jika gender = 'female' dan married = false, maka tambahkan 'Ms.' sebelum name

Function akan mengembalikan string berupa nama-nama yang sudah ditambahkan dengan title
ex: Mr. *****, Mrs. *****, Ms. *****, Mr. *****


[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan .split, indexOf!

*/

const assert = require('../assert');

const addTitle = require('./002');

(function() {
  assert.deepEqual(
    addTitle([
      ['Sergei', 'male', true],
      ['Alyona', 'female', false]
    ]),
    [ 'Mr. Sergei', 'Ms. Alyona' ]
  );

  assert.deepEqual(
    addTitle([
      ['Dimitri', 'male', false],
      ['Anastasia', 'female', false],
      ['Vladlena', 'female', true]
    ]),
    ['Mr. Dimitri', 'Ms. Anastasia', 'Mrs. Vladlena']
  );

  assert.deepEqual(
    addTitle([
      ['Joichiro', 'male', true],
      ['Erina', 'female', false],
      ['Akira', 'male', false],
      ['Leonora', 'female', true]
    ]),
    ['Mr. Joichiro', 'Ms. Erina', 'Mr. Akira', 'Mrs. Leonora']
  )

  assert.deepEqual(addTitle([]), 'No data');

  assert.deepEqual(addTitle(), 'No data');
})();