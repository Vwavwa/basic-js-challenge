/**
=========================
Array Mastery: Add Titles
=========================

[INSTRUKSI]

Function addTitle akan menerima satu parameter berupa array data orang dan akan menambahkan
title (Mr. / Ms. / Mrs.) kepada setiap orang yang ada di dalam array tersebut.

Akan diberikan 3 elemen di setiap array:
1. Name
2. Gender ('male'/'female')
3. Married (true/false)

Jika gender = 'male', maka tambahkan 'Mr.' sebelum name
Jika gender = 'female' dan married = true, maka tambahkan 'Mrs.' sebelum name
Jika gender = 'female' dan married = false, maka tambahkan 'Ms.' sebelum name

Function akan mengembalikan string berupa nama-nama yang sudah ditambahkan dengan title
ex: Mr. *****, Mrs. *****, Ms. *****, Mr. *****


[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan .split, indexOf!

*/

function addTitle (people) {

  //declare satu variable untuk store result
  var result = []
  
  if(!people || people.length == 0) {
    return 'No data'
  }
  
  //looping untuk menmbahkan title pada setiap elemen
  for(let i = 0; i < people.length; i++) {
    
    //jika male tambahkan  'Mr. ', 
    if(people[i][1] === 'male'){
      result.push('Mr. ' + people[i][0])
    }

    //jika female & false tambahkan 'Ms.' 
    if(people[i][1] === 'female' && people[i][2] === false) {
      result.push('Ms. ' + people[i][0])
    }
    
    //dan jika female & true tambahkan 'Mrs. '
    if(people[i][1] === 'female' && people[i][2] === true) {
      result.push('Mrs. ' + people[i][0])
    }
  }
  return result
}

module.exports = addTitle;
