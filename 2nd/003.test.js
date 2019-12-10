/**
Array Merge
-----------
Mishima Zaibatsu mempunyai 2 mata-mata untuk mencari nama orang yang berpotensi untuk mengalahkan
Heihachi Mishima dan mengambil alih perusahaan miliknya. 2 mata-mata ini mengerjakan tugasnya
dengan baik, tetapi ada saatnya kedua data yang diberikan memiliki duplikat (nama yang sama).
Implementasikan function arrayMerge untuk menggabungkan 2 data yang diberikan kepada
Mishima Zaibatsu dan jangan sampai terdapat nama yang sama di data yang sudah tergabung tadi.
Contoh:
- input: ['kazuya', 'jin', 'lee'], ['kazuya', 'feng']
  output: ['kazuya', 'jin', 'lee', 'feng']
- input: ['lee', 'jin'], ['kazuya', 'panda']
  output: ['lee', 'jin', 'kazuya', 'panda']


ATURAN CODING:
--------------
- Wajib menuliskan pseudocode atau algoritma.
  Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi
  soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()
  - .concat()
  - .indexOf() / .lastIndexOf() / .includes()
  - .copyWithin()
*/

const assert = require('../assert');

const arrayMerge = require('./003');

(function () {
  assert.strictEqual(
    arrayMerge(['king', 'devil jin', 'akuma'], ['eddie', 'steve', 'geese']),
    ['king', 'devil jin', 'akuma', 'eddie', 'steve', 'geese']
  );

  assert.strictEqual(
    arrayMerge(['sergei', 'jin'], ['jin', 'steve', 'bryan']),
    ['sergei', 'jin', 'steve', 'bryan']
  );

  assert.strictEqual(
    arrayMerge(['alisa', 'yoshimitsu'], ['devil jin', 'yoshimitsu', 'alisa', 'law']),
    ['alisa', 'yoshimitsu', 'devil jin', 'law']
  );

  assert.strictEqual(
    arrayMerge([], ['devil jin', 'sergei']),
    ['devil jin', 'sergei']
  );

  assert.strictEqual(
    arrayMerge(['hwoarang'], []),
    ['hwoarang']
  );

  assert.strictEqual(
    arrayMerge([], []),
    []
  );
})();