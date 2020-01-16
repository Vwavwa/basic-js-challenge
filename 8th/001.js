/*
==================================
Array Mastery: Who's the winner?
==================================
Nama:________
[INSTRUKSI]
Ada dua tim, Gryffindor dan Slytherin yang sedang bertarung pada sebuah kompetisi futsal.
Function whosTheWinner akan menerima suatu parameter beruapa array berisikan nama
tim yang sudah mencetak gol. Apabila pada array jumlah "Gryffindor" lebih banyak
daripada "Slytherin" maka function akan mereturn "Gryffindor Juara Futsal Hogwarts 2018".
Sedangkan jika jumlah "Slytherin" lebih banyak daripada "Gryffindor" maka function
akan mereturn "Slytherin Juara Futsal Hogwarts 2018". Jika jumlah kedua tim sama,
maka function akan mereturn "Draw, pertandingan akan dilanjutkan dengan penalty kick!"

Let's start our own wizardy, shall we?

[RULE]
- Wajib menuliskan algoritma/pseudocode. Tidak ada algoritma/pseudocode atau
  algoritma/pseudocode tidak match dengan kode maka indikasi soal tidak
  diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .map, .filter, atau .reduce!

*/

function whosTheWinner(goals) {
  // your code here 
  /*
    jika array kosong
    tampilkan "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
    declare variable untuk counter slytherin
    declare variable untuk counter gryffindor
    looping array goals
      jika array ke index = slytherin
        counter slytherin ditambah 1
      selain itu jika array ke index = gryffindor
        counter gryffindor ditambah 1
    jika counter slytherin > gryffindor
      tampilkan "Slytherin Juara Futsal Hogwarts 2018"
    selain itu jika counter gryffindor > slytherin
      tampilkan "Gryffindor Juara Futsal Hogwarts 2018"
    selain itu 
      tampilkan "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
  */

  if (goals.length === null) {
    return "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
  }

  let countSlytherin = 0;
  let countGryffindor = 0;

  for (let i = 0; i < goals.length; i++) {
    if (goals[i] === "Slytherin") {
      countSlytherin += 1

    } else if (goals[i] === "Gryffindor") {
      countGryffindor += 1
    }
  }
  
  if (countSlytherin > countGryffindor) {
    return 'Slytherin Juara Futsal Hogwarts 2018'

  } else if (countGryffindor > countSlytherin) {
    return "Gryffindor Juara Futsal Hogwarts 2018"

  } else {
    return "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
  }
 
}

// TEST CASES
console.log(whosTheWinner(["Gryffindor", "Slytherin", "Slytherin"])); // "Slytherin Juara Futsal Hogwarts 2018"
console.log(whosTheWinner(["Gryffindor", "Gryffindor", "Slytherin", "Slytherin", "Gryffindor"])); // "Gryffindor Juara Futsal Hogwarts 2018"
console.log(whosTheWinner(["Gryffindor", "Slytherin"])); // "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
console.log(whosTheWinner([])); // "Draw, pertandingan akan dilanjutkan dengan penalty kick!"
console.log(whosTheWinner(["Slytherin"])); // "Slytherin Juara Futsal Hogwarts 2018"