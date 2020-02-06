/*
================
Break Sentence
================
Name :_____________
[INsentenceUCTIONS]
breakSentence adalah sebuah function yang menerima satu parameter berupa string kalimat.
function akan mereturn sebuah array yang berisikan setiap kata di kalimat tesebut.
[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan sintaks .split()! Jangan lupa, split bukanlah operasi array.
- Dilarang menggunakan regex .match dan lainnya!
[EXAMPLE]
breakSentence('I am so amazed')
output: ['i', 'am', 'so', 'amazed']
*/

/*
buat sebuah variale untuk menampung array dengan nama result
buat sebuah variable temp untuk menyimpan kata
cek jika input = string kosong
return result
looping setiap string
    jika index bukan spasi 
      temp + sentence ke index
    selain itu jika sentence ke index adalah spasi
      push tempt ke result
      set temp ke string kosong lagi
push temp ke result - ini untuk push hasil kata terakhir
*/



function breakSentence(sentence) {
  let result = [];
  let temp = '';
  if(sentence == '') {
    return result
  }
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] != ' ') {
      temp += sentence[i]
    }
    else if(sentence[i] == ' ') {
      result.push(temp)
      temp = ''
    }
  }
  result.push(temp)
  return result
}

console.log(breakSentence('I am so amazed')); // ['I', 'am', 'so', 'amazed' ]
console.log(breakSentence('do something')); // ['do', 'something']
console.log(breakSentence('week3 is so easy')); // ['week3', 'is', 'so', 'easy']
console.log(breakSentence('I can do this with my eyes closed')); // ['I', 'can', 'do', 'this', with', 'my', 'eyes', 'closed']
console.log(breakSentence('')); // []