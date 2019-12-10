/**
--------------------
String Manipulators!
--------------------

Buatlah beberapa function berikut:

1. addTitle, yang menerima 4 parameter yaitu `name1`, `name2`, `name3` dan `name4`.
   Function akan menambahkan 'Mr. ' dan ', ' pada setiap nama dan mengembalikan nilai tersebut.
   Contoh:
   - input: addTitle('Steve Fox', 'Jin Kazama', 'Eddie Gordo', 'Geese Howard')
     output: 'Mr. Steve Fox, Mr. Jin Kazama, Mr. Eddie Gordo, Mr. Geese Howard'

2. changeSpacesWith, yang menerima 2 parameter yaitu `str` dan `to`.
   Function akan mengganti spasi di `str` dengan nilai yang kita berikan lewat parameter `to`
   dan mengembalikan nilai tersebut.
   Contoh:
   - input: changeSpacesWith('Steve Fox', '-')
     output: 'Steve-Fox'
   - input: changeSpacesWith('Sergei Dragunov', '+')
     output: 'Sergei+Dragunov'

3. cutString, yang menerima 1 parameter yaitu `str`.
   Function akan memotong string supaya tersisa 6 karakter dan mengembalikan nilai tersebut.
   Contoh:
   - input: cutString('Kazuya Mishima')
     output: 'Kazuya'
   - input: cutString('Sergei Dragunov')
     output: 'Sergei'
   - input: cutString('Dimitri W')
     output: 'Dimitr'

RULES:
- Dilarang menggunakan regex
- Dilarang menggunakan slice, split, splice, substring

*/

function addTitle(person1, person2, person3, person4) {
    // Code disini
    // addTitle = 'Steve Fox', 'Jin Kazama', 'Eddie Gordo', 'Geese Howard'
    newStr = []
    str =[]
    newStr.push(person1,person2,person3,person4)
    for(i=0;i< newStr.length;i++){
      if(str[4] == str.length){
        str = str + 'Mr. ' + newStr[i]
      }
      else{
        str = str + 'Mr. ' + newStr[i] +', '
      }
    }
    // console.log(newStr)
    return str;
}
console.log(addTitle('Steve Fox', 'Jin Kazama', 'Eddie Gordo', 'Geese Howard'))

function changeSpacesWith(str, to) {
var output=''
    // Code disini
    for(i=0;i<str.length;i++){
      if(str[i]===' '){
        output+= to
      }
      else{
        output+= str[i]
      }
    }
    // console.log(output)
    
    return output
}
// console.log(changeSpacesWith('Steve Fox','-'))

function cutString(str) {
var storeStr = ''
    // Code disini
    for(let i = 0 ; i < 6 ; i++){
      storeStr = storeStr + str[i]
    }
    return storeStr
}
// console.log(cutString('Kazuya Mishima'))
// console.log(cutString('Dimitri W'))

module.exports = {
  addTitle,
  changeSpacesWith,
  cutString
}