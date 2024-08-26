class Lingkaran {
  constructor(r) {
    this.r = r;
  }

  luas() {
    return Math.PI * this.r * this.r;
  }

  keliling() {
    return 2 * Math.PI * this.r;
  }
}

class Tabung extends Lingkaran {
  constructor(r, t) {
    super(r);
    this.t = t;
  }

  volume() {
    return this.luas() * this.t;
  }

  luasPermukaan() {
    return 2 * this.luas() + this.keliling() * this.t;
  }

  luasSelimut() {
    return this.keliling() * this.t;
  }
}

class Kerucut extends Lingkaran {
  constructor(r, t, s) {
    super(r);
    this.t = t;
    this.s = s;
  }

  volume() {
    return (1 / 3) * this.luas() * this.t;
  }

  luasPermukaan() {
    return this.luas() + Math.PI * this.r * this.s;
  }

  luasSelimut() {
    return Math.PI * this.r * this.s;
  }
}

class Bola extends Lingkaran {
  constructor(r) {
    super(r);
  }

  volume() {
    return (4 / 3) * Math.PI * this.r * this.r * this.r;
  }

  luasPermukaan() {
    return 4 * this.luas();
  }
}

console.log("==============Lingkaran==============");
let lingkaran = new Lingkaran(7);
console.log("Luas Lingkaran:", lingkaran.luas());
console.log("Keliling Lingkaran:", lingkaran.keliling());
console.log("\n");
console.log("==============Tabung==============");
let tabung = new Tabung(7.5, 50);
console.log("Volume Tabung:", tabung.volume());
console.log("Luas Permukaan Tabung:", tabung.luasPermukaan());
console.log("Luas Selimut Tabung:", tabung.luasSelimut());
console.log("\n");
console.log("==============Kerucut==============");
let kerucut = new Kerucut(10, 40, 41.23);
console.log("Volume Kerucut:", kerucut.volume());
console.log("Luas Permukaan Kerucut:", kerucut.luasPermukaan());
console.log("Luas Selimut Kerucut:", kerucut.luasSelimut());
console.log("\n");
console.log("==============Bola==============");
let bola = new Bola(15);
console.log("Volume Bola:", bola.volume());
console.log("Luas Permukaan Bola:", bola.luasPermukaan());
