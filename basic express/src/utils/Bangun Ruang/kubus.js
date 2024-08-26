class Kubus {
    constructor(sisi) {
        this.sisi = sisi;
    }

    volume() {
        return this.sisi * this.sisi * this.sisi;
    }

    luas() {
        return 6 * this.sisi * this.sisi;
    }

    keliling() {
        return 12 * this.sisi;
    }

    diagonal() {
        return Math.sqrt(3) * this.sisi;
    }

    luasPermukaan() {
        return 6 * this.sisi * this.sisi;
    }

    hitungSemua() {
        return {
            Volume: this.volume(),
            Luas: this.luas(),
            Keliling: this.keliling(),
            Diagonal: this.diagonal(),
            LuasPermukaan: this.luasPermukaan()
        };
    }
}

module.exports = Kubus;
