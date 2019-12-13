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
// buat variabel untuk menampung array result
// jika firstData dan secondData kosong
//   push array yang ada ke array result
// jika tidak
// looping setiap elemen  firstData
//   push setiap elemen pada array firstData di result
// looping kedua untuk elemen secondData
//   jika elemen array secondData tidak sama dengan setiap elemen di array result
//   push elemen secondData tersebut
// kembalikan nilai array result 

function arrayMerge(firstData, secondData) {
//Code di sini
  var result =[]

  if(arrayMerge.length === 0){
    result.push()
  }
  else{
    for(j=0;j<firstData.length;j++){
      result.push(firstData[j])
    }
    for(i=0;i<secondData.length;i++){
      if(secondData[i] != result[0] && secondData[i] != result[1] && secondData[i] != result[2]){
        result.push(secondData[i])
      }    
    }
  }  
  return result
}
console.log(arrayMerge(['baldur', 'thor', 'loki'], ['loki, thor, baldur']))
// console.log(arrayMerge(['hwoarang'], []))
// console.log(arrayMerge([], []))
module.exports = arrayMerge;