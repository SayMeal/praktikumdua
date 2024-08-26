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

function updateCalculations() {
  const radius = parseFloat(document.getElementById('radius').value);
  const height = parseFloat(document.getElementById('height').value);
  const slantHeight = parseFloat(document.getElementById('slantHeight').value);

  if (!isNaN(radius)) {
    calculateLingkaran(radius);
    calculateTabung(radius, height);
    calculateKerucut(radius, height, slantHeight);
    calculateBola(radius);
  }
}

function calculateLingkaran(radius) {
  const lingkaran = new Lingkaran(radius);
  const result = `
    Luas Lingkaran: ${lingkaran.luas().toFixed(2)}<br>
    Keliling Lingkaran: ${lingkaran.keliling().toFixed(2)}
  `;
  document.getElementById('lingkaranResult').innerHTML = result;
}

function calculateTabung(radius, height) {
  if (isNaN(height)) {
    document.getElementById('tabungResult').innerHTML = "Tinggi diperlukan untuk perhitungan Tabung.";
    return;
  }
  const tabung = new Tabung(radius, height);
  const result = `
    Volume Tabung: ${tabung.volume().toFixed(2)}<br>
    Luas Permukaan Tabung: ${tabung.luasPermukaan().toFixed(2)}<br>
    Luas Selimut Tabung: ${tabung.luasSelimut().toFixed(2)}
  `;
  document.getElementById('tabungResult').innerHTML = result;
}

function calculateKerucut(radius, height, slantHeight) {
  if (isNaN(height) || isNaN(slantHeight)) {
    document.getElementById('kerucutResult').innerHTML = "Tinggi dan Tinggi Miring diperlukan untuk perhitungan Kerucut.";
    return;
  }
  const kerucut = new Kerucut(radius, height, slantHeight);
  const result = `
    Volume Kerucut: ${kerucut.volume().toFixed(2)}<br>
    Luas Permukaan Kerucut: ${kerucut.luasPermukaan().toFixed(2)}<br>
    Luas Selimut Kerucut: ${kerucut.luasSelimut().toFixed(2)}
  `;
  document.getElementById('kerucutResult').innerHTML = result;
}

function calculateBola(radius) {
  const bola = new Bola(radius);
  const result = `
    Volume Bola: ${bola.volume().toFixed(2)}<br>
    Luas Permukaan Bola: ${bola.luasPermukaan().toFixed(2)}
  `;
  document.getElementById('bolaResult').innerHTML = result;
}