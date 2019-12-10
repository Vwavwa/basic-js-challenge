/**
Graduates Count
Implementasikan function graduatesCount untuk menampilkan berapa orang yang lulus berdasarkan
data nilai yang diberikan (`scores`) dengan aturan jika nilai lebih besar atau sama dengan 75
maka orang itu dinyatakan lulus.
Contoh:
- input: [70, 85, 65, 90]
  output: 2 orang lulus
- input: [0, 65, 30, 74]
  output: Tidak ada yang lulus
- input: [90, 100, 76, 85]
  output: Semua lulus
- input: []
  output: Data kosong


ATURAN CODING:
--------------
- Wajib menuliskan pseudocode atau algoritma.
  Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi
  soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()

*/
// buat variabel untuk menghitung jumlah kelulusan
// lakukan perulangan untuk menentukan index yang akan di bandingkan
//     jika array kosong tampilkan data kosong
// lakukan perulangan untuk menentukan index yang akan di bandingkan
//     jika array isi 0 tampilkan tidak ada yang lulus
// lakukan perulangan untuk menentukan index yang akan di bandingkan
//     bandingkan setiap array,jika array ke i  > atau = 75,  
//     hitung kelulusan + 1
//     bandingkan jumlah kelulusan dengan panjang string
//     jika semua lulus tampilkan semua orang lulus
// tampilkan jumlah orang yang lulus

const assert = require('assert');

const graduatesCount = require('./001');

function runTest() {
  assert.strictEqual(graduatesCount([70, 85, 65, 90]), '2 orang lulus');
  assert.stringEqual(graduatesCount([0, 65, 30, 74]), 'Tidak ada yang lulus');
  assert.strictEqual(graduatesCount([90, 100, 76, 85]), 'Semua lulus');
  assert.strictEqual(graduatesCount([]), 'Data kosong');
}

runTest();

