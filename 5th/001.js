/*
Array Remover
Array remover merupakan sebuah function yang berfungsi untuk menghapus value
dari sebuah array yang diberikan berdasarkan jumlah yang ingin dihapus dan index
mulai.

Array remover menerima tiga parameter yaitu array of number, index untuk mulai
menghapus dan jumlah data yang akan dihapus

Contoh:
Input:
  array: [ 777, 666, 333, 10, 5, 6]
  index: 1
  count: 2

Output:
  [ 777, 10, 5, 6 ]

RULES:
  - WAJIB MENYERTAKAN ALGORITMA / PSEUDOCODE
  - Dilarang menggunakan built-in function .map, .filter, .reduce!
*/

function arrayRemover(array, index, count) {
  // your code here
  // hapus jumlah data pakai array.slice(parameter kedua, parameter ketiga)
  // array.splice(index, count)


  
    var newArray = [];
    
    count--;
    for (i = 0; i < array.length; i++) {
      if (!(i <= index + count && i >= index)) {
        newArray.push(array[i])
      }
    }
    return newArray;
  
}

console.log(arrayRemover([1, 2, 3], 0, 2)); // [3]
console.log(arrayRemover([777, 666, 333, 10, 5, 6], 1, 2)); // [ 777, 10, 5, 6 ]
console.log(arrayRemover([1, 2, 3], 0, 3)) // []