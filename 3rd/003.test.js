/**
=====================================
Modular Functions: Calculate Number in Object
=====================================

[INSTRUKSI]

Diberikan function kali, tambah, bagi, kurang, dan calculate

Implementasikan function calculate untuk menghitung angka-angka yang ada di dalam object, operator perhitungan tersedia di dalam object.
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

const assert = require('../assert');

const { calculate } = require('./003');

(function() {
  const input1 = [
    { operand1: 5, operand2: 10, operator: '*' }, 
    { operand1: 3, operand2: 10, operator: '-'}
  ];
  assert.deepEqual(calculate(input1), [50, -7]);

  const input2 = [
    { operand1: 10, operand2: 5, operator: '/' }, 
    { operand1: 3, operand2: 10, operator: '+'}
  ];
  assert.deepEqual(calculate(input2), [2, 13]);

  const input3 = [
    { operand1: 23.62, operand2: 103.2, operator: '+' },
    { operand1: 1647, operand2: -302, operator: '-' },
    { operand1: 32.8, operand2: -10, operator: '*' },
    { operand1: -144, operand2: 8, operator: '/' }
  ];
  assert.deepEqual(calculate(input3), [126.82, 1949, -328, -18]);

  assert.deepEqual(calculate([]), []);
})();