/**

Drone Position
==============

Implementasikan function dronePosition untuk mencari koordinat drone yang
ada di dalam `grid`. Drone akan direpresentasikan sebagai karakter '*'.

Format koordinat: <baris>, <kolom>

# Asumsi:
- Drone ('*') selalu berjumlah 1, tidak mungkin ada drone lain

Contoh input ada di test case.

# Aturan coding:
- WAJIB menyertakan algoritma / pseudocode

*/

function dronePosition (grid) {
  // Code here

  
  // deklarasi satu variable array untuk push index dari drone
  var result = []; 
  
  // buat flag untuk mengecek ada drone atau tidak
  let isDrone = false
  
  // looping untuk cek baris drone  
  for(let i = 0; i < grid.length; i++) {
    
    // looping untuk kolom drone
    for(let j = 0; j < grid.length; j++) {
      
      // jika ada drone set flag ke true
      if(grid[i][j] === '*') {
        isDrone = true;

        // push index dari drone tersebut
        result.push(i,j)
      }
    }
  }

  // jika tidak ada drone return 'No drone'
  if(isDrone === false) {
    return 'No drone'
  }
return result
  
}
console.log(dronePosition([
  ['', '', ''],
  ['', '', ''],
  ['', '', '*']
])); // 2, 2

console.log(dronePosition([
  ['', '', ''],
  ['', '*', ''],
  ['', '', '']
])); // 1, 1

console.log(dronePosition([
  ['', '', '*'],
  ['', '', ''],
  ['', '', '']
])); // 0, 2

console.log(dronePosition([
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
])); // No drone
