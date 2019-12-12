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
function graduatesCount (scores) {
    var counter = 0;
    if(scores.length==0){
        return 'Data kosong'
    }
    for(i=0;i<scores.length;i++){
        if(scores[i]>=75){
            counter += 1
        }
    }
    if(counter === scores.length){
        return 'Semua lulus'
    }
    else if(counter === 0){
        return 'Tidak ada yang lulus' 
    }
     return counter + ' orang lulus'         
}  
// buat variabel untuk simpan counter orang yang lulus     
// jika array kosong 
// return Data kosong
// looping for cek array index ke i
//      bandingkan setiap index
//      jika array ke i >= 75 
//      counter tambah 1
// return
// jika counter sama dengan jumlah orang 
// tampilkan semua orang lulus
// jika counter sama dengan 0 
// tampilkan tidak ada yang lulus

//     return `${emptyArray}${notPass}${allPass}`
// }

// Test cases

// console.log(graduatesCount([76, 77, 30, 80, 10, 20])); // 3 orang lulus
// console.log(graduatesCount([100, 100, 74, 60, 87])); // 3 orang lulus
// console.log(graduatesCount([90, 100, 85, 79, 80, 74, 80])); // 6 orang lulus
// console.log(graduatesCount([100, 100, 100, 85, 90])); // Semua orang lulus
// console.log(graduatesCount([0, 67, 34, 0, 23])); // Tidak ada yang lulus
// console.log(graduatesCount([])); // Data kosong

module.exports = graduatesCount;
