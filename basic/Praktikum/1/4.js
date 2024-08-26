/*
Diketahui suku pertama dari sebuah deret geometri adalah 4 dan ratio bernilai 3.
Buatlah sebuah code untuk menghitung jumlah 10 suku pertama dari deret tersebut!
Gunakan pendekatan konsep perulangan!
*/


// Rumus: Sn = a * (r^(n-1))
function sumGeometri(a, r, n) {
    let sum = 0;
    if (r === 1) {
        return a * n;
      }
    for (let i = 1; i <= n; i++) {
      sum += a * Math.pow(r, (i-1));
    }
    return sum;
  }
  
  const a = 4;
  const r = 3;
  const n = 10;
  
  const result = sumGeometri(a, r, n);
  console.log("Jumlah " + n + " suku pertama dari deret geometri adalah:", result);