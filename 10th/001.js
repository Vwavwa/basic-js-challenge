/**
Number Letters
--------------
Implementasikan function `numberLetters` untuk mengganti angka-angka
yang ada di dalam `str` menjadi sebuah huruf yang sesuai dengan aturan:
1 = i
4 = a
3 = e
7 = u
0 = o
Contoh ada di test cases
RULES:
  - Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match
    dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
*/
/**
Number Letters
--------------
Implementasikan function `numberLetters` untuk mengganti angka-angka
yang ada di dalam `str` menjadi sebuah huruf yang sesuai dengan aturan:
1 = i
4 = a
3 = e
7 = u
0 = o
Contoh ada di test cases
RULES:
  - Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match
    dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
*/
/*
  declare satu variable result untuk store string
  looping str
    jika index = '1'
      result di tambah string 'i'
      selain itu jika index ='4'
        result di tambah string 'a'
      selain itu jika index ='3'
        result di tambah string 'e'
      selain itu jika index ='7'
        result di tambah string 'u'
      selain itu jika index ='0'
        result di tambah string 'o'
      selain itu 
        result di tambah dengan str  
*/
function numberLetters(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '1') {
      result += 'i'
    } else if (str[i] == '4') {
      result += 'a'
    } else if (str[i] == '3') {
      result += 'e'
    } else if (str[i] == '7') {
      result += 'u'
    } else if (str[i] == '0') {
      result += 'o'
    } else {
      result += str[i]
    }
  }
  return result
}

// Test cases
console.log(numberLetters('d1m1tr1w4hy7d1p7tr4')); // dimitriwahyudiputra
console.log(numberLetters('s3rg31dr4g7n0v')); // sergeidragunov
console.log(numberLetters('j1nk4z4m4')); // jinkazama
console.log(numberLetters('s7m3t4l')); // sumetal
console.log(numberLetters('m04m3t4l')); // moametal
console.log(numberLetters('')); //