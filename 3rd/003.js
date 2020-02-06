/**
=====================================
Modular Functions: Calculate Number in Object
=====================================

[INSTRUKSI]

Diberikan function kali, tambah, bagi, kurang, dan calculate

Implementasikan function calculate untuk menghitung angka-angka yang ada di dalam object, 
operator perhitungan tersedia di dalam object.

ASUMSI:
 - keyName operand1, operand2 dan operator selalu ada
 - value dari operand1 dan operand2 selalu number
 - value dari operator berupa string: '+', '-', '*' atau '/'

 Function calculate akan me-return sebuah array yang berisi hasil 
 perhitungan dari object tersebut.

contoh 1:
input: [ {
              operand1: 5,
              operand2: 10,
              operator: '*'
            },
            {
              operand1: 3,
              operand2: 10,
              operator: '-'
            },
            {
              operand1: 3,
              operand2: 10,
              operator: '/'
            }
          ];
output: [50, -7, 0.3]

contoh 2:
input: []
output: []

*/

let input = [ 
  { operand1: 23.62, operand2: 103.2, operator: '+' },
    { operand1: 1647, operand2: -302, operator: '-' },
    { operand1: 32.8, operand2: -10, operator: '*' },
    { operand1: -144, operand2: 8, operator: '/' }
];
function round(data) {
  let result = Math.round(data * 100) / 100;
  return result
}

function kali(operand1, operand2) {
  let result = 0
  result = operand1 * operand2
  let rounded = round(result)
  return rounded
}
function tambah(operand1, operand2) {
  let result = 0
  result = operand1 + operand2
  let rounded = round(result)
  return rounded
}
function kurang(operand1, operand2) {
  let result = 0
  result = operand1 - operand2
  let rounded = round(result)
  return rounded
}
function bagi(operand1, operand2) {
  let result = 0
  result = operand1 / operand2
  let rounded = round(result)
  return rounded
}

function calculate(input) {
  let result = []

  for(let x = 0; x<input.length; x++){
    if(input[x].operator === '*'){
      let hasilKali = kali(input[x].operand1, input[x].operand2)
      result.push(hasilKali)
    }
    else if(input[x].operator === '+') {
      let hasilTambah = tambah(input[x].operand1, input[x].operand2)
      result.push(hasilTambah)
    }
    else if(input[x].operator === '-') {
      let hasilKurang = kurang(input[x].operand1, input[x].operand2)
      result.push(hasilKurang)
    }
    else if(input[x].operator === '/') {
      let hasilBagi = bagi(input[x].operand1, input[x].operand2)
      result.push(hasilBagi)
    }

  }
  
  return result;
}

console.log(calculate(input))


module.exports = {
  calculate
}
