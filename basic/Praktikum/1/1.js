const luasTanah = 20.5 * 30;
const hargaTanah = luasTanah * 1500000;
const ppn = hargaTanah * 0.15;
const totalHarga = hargaTanah + ppn;

console.log("Luas Tanah:", luasTanah, "meter persegi");
console.log("Harga Tanah Sebelum PPN:", hargaTanah);
console.log("PPN:", ppn);
console.log("Total Harga Tanah:", totalHarga);