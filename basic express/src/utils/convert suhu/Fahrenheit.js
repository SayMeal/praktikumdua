class Fahrenheit {
    constructor(value) {
        this.value = value;
    }

    toCelcius() {
        return (this.value - 32) * 5/9;
    }

    toReamur() {
        return (this.value - 32) * 4/9;
    }

    toKelvin() {
        return (this.value - 32) * 5/9 + 273.15;
    }

    toAll(){
        return {
            Celcius: this.toCelcius(),
            Reamur: this.toReamur(),
            Kelvin: this.toKelvin()
        };
    }
}

module.exports = Fahrenheit;