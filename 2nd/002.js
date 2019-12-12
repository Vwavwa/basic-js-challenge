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
// array diubah ke string 
// simpan ke dalam satu variabel
// buat variabel untuk menyimpan string yang akan di reverse
// buat variabel penampung array
//     looping setiap elemen 
//         dapatkan elemen terakhir dari indeks 
//         jika di dalam string terdapat koma,jalankan program dibawah
//         push string sebelum koma tersebut ke array              
//         variabel penyimpan string di assign nilai kosong
//         jika tidak ada koma
//              simpan elemen terakhir tersebut ke variabel yang dibuat
//     return array yang telah menyimpan hasil reverse


function reverseAll (arr) {
    var stringNames = arr.toString();
    var stringReverse ='';
    var arrayResult =[];
    for(i=stringNames.length-1;i>=0;i--){
        if(stringNames[i]===','){
            arrayResult.push(stringReverse)
            stringReverse =''
        }
        else{
            stringReverse+=stringNames[i]
        }
            
    }
    arrayResult.push(stringReverse)
    return arrayResult
}


// console.log(reverseAll(['kira', 'lawliet', 'near', 'mello']));
// [ 'ollem', 'raen', 'teilwal', 'arik' ]

// console.log(reverseAll([]));
// []

module.exports = reverseAll;
