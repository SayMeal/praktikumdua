class JenisBilangan {
    constructor(value, base) {
        this.value = value;
        this.base = base;
    }

    toDecimal() {
        return parseInt(this.value, this.base);
    }

    toBinary() {
        return this.toDecimal().toString(2);
    }

    toOctal() {
        return this.toDecimal().toString(8);
    }

    toHexadecimal() {
        return this.toDecimal().toString(16);
    }

    toAscii() {
        return String.fromCharCode(this.toDecimal());
    }

    toAll() {
        return {
            Decimal: this.toDecimal(),
            Binary: this.toBinary(),
            Octal: this.toOctal(),
            Hexadecimal: this.toHexadecimal(),
            Ascii: this.toAscii(),
        };
    }
}

module.exports = JenisBilangan;
