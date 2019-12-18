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

function addEvenOdd (arrNum) {
  //Coding di sini
  
  //create variable to store the calculate number
  var odd = 0
  var even = 0

  //create variable to push the result 
  const evenResult = []
  const oddResult = []
  const result =[]

  //loop over the arrNum to find odd or even number
  //if odd number, add by odd
  for(let i = 0; i < arrNum.length ; i++) {
    if(arrNum[i] % 2 === 0) {
      odd += arrNum[i]
    }
    
    //if even number, add by even
    else {
      even += arrNum[i]
    }
  }
  //push calculate result to array oddResult and evenResult
  oddResult.push(odd)
  evenResult.push(even)

  //push array evenResult and oddResult to array result
  result.push(evenResult)
  result.push(oddResult)


  return result;
}

module.exports = addEvenOdd
