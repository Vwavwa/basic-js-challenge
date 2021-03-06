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

function arrayMerge (firstData, secondData) {
  //Code di sini
  const result = [];

  // loop over the firstData,
  // and push all the elements into the result array
  for (let i = 0; i < firstData.length; i++) {
    result.push(firstData[i]);
  }

  // loop over the secondData
  for (let i = 0; i < secondData.length; i++) {
    
    // loop over the result array to find the element of secondData
    // that the firstData already have
    // if it is found, flag the isExist variable to true
    let isExist = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === secondData[i]) {
        isExist = true;
      }
    }

    // if the flag is not true then push the element of secondData to result array
    if (!isExist) {
      result.push(secondData[i]);
    }
  }
  
  return result;
}
console.log(arrayMerge(['baldur', 'thor', 'loki'], ['loki, thor, baldur']))
// console.log(arrayMerge(['hwoarang'], []))
// console.log(arrayMerge([], []))
module.exports = arrayMerge;