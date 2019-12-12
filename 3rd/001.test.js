/*
================================
Array Mastery: Add Evens and Odds
================================

[INSTRUKSI]

Function addEvenOdd akan menerima satu parameter berupa array of number. 
Kelompokkanlah hasil penjumlahan bilangan yang genap dan bilangan yang ganjil dan return array 2 dimensi 
di mana array pertama merupakan hasil penjumlahan angka ganjil dan array selanjutnya adalah hasil penjumlahan angka genap

Contoh:
input: [3, 5, 7, 8]
output: [[15], [8]]

input: [2, 4, 6, 10]
output: [[0], [22]]

input: []
output: [[0], [0]]

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan sintaks eval()!
*/

const assert = require('../assert');

const addEvenOdd = require('./001');

(function() {
  assert.deepEqual(
    addEvenOdd([3, 5, 7, 8]),
    [ [15], [8] ]
  );

  assert.deepEqual(
    addEvenOdd([2, 4, 6, 10]),
    [ [0], [22] ]
  );

  assert.deepEqual(
    addEvenOdd([-1, -2, -3, -4]),
    [ [-4], [-6] ]
  );

  assert.deepEqual(
    addEvenOdd([0, 0]),
    [ [0], [0] ]
  );

  assert.deepEqual(
    addEvenOdd([]),
    [ [0], [0] ]
  );
})();