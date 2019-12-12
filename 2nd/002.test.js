/**
Reverse All
Implementasikan function reverseAll untuk membalikkan `arr` DAN setiap elemen string yang ada di
dalamnya.
Contoh:
- input: ['devil jin', 'geese', 'akuma']
  output: ['amuka', 'eseeg', 'nij lived']
- input: ['alisa', 'xiaoyu', 'nina', 'lili']
  output: ['ilil', 'anin', 'uyoaix', 'asila']
- input: []
  output: []


ATURAN CODING:
--------------
- Wajib menuliskan pseudocode atau algoritma.
  Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi
  soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()
  - .reverse()
  - .split()
  - .join()
*/

const assert = require('../assert');

const reverseAll = require('./002');

(function runTest() {
  assert.deepEqual(
    reverseAll(['devil jin', 'geese', 'akuma']),
    ['amuka', 'eseeg', 'nij lived']
  );

  assert.deepEqual(
    reverseAll(['alisa', 'xiaoyu', 'nina', 'lili']),
    ['ilil', 'anin', 'uyoaix', 'asila']
  );

  assert.deepEqual(reverseAll([]), []);
})();