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

var countLulus = 0
var kosong =''
var nol=''
var all=''
var total =0

function graduatesCount (scores) {
    for(i=0;i<=scores.length;i++){
        if(scores === []){
            kosong = 'data kosong'
        }
    }
    for(i=0;i<scores.length;i++){
        if(scores[i] === 0){
        nol = 'tidak ada yang lulus'
        }
    }    
    for(i=0;i<scores.length;i++){   
        if(scores[i] >= 75){
            countLulus = countLulus + 1
            total = countLulus + ' orang lulus'
            if(countLulus == scores.length){
                all = 'semua orang lulus'
            }
        }
    }      
   return `${kosong} ${nol} ${total} ${all}`
}

// Test cases

// console.log(graduatesCount([76, 77, 30, 80, 10, 20])); // 3 orang lulus
// console.log(graduatesCount([100, 100, 74, 60, 87])); // 3 orang lulus
// console.log(graduatesCount([90, 100, 85, 79, 80, 74, 80])); // 6 orang lulus
// console.log(graduatesCount([100, 100, 100, 85, 90])); // Semua orang lulus
// console.log(graduatesCount([0, 0, 0, 0, 0])); // Tidak ada yang lulus
console.log(graduatesCount([])); // Data kosong
