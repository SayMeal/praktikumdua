class Reamur {
    constructor(value) {
        this.value = value;
    }

    toCelcius() {
        return this.value * 5/4;
    }

    toFahrenheit() {
        return this.value * 9/4 + 32;
    }

    toKelvin() {
        return this.value * 5/4 + 273.15;
    }

    toAll(){
        return {
            Celcius: this.toCelcius(),
            Fahrenheit: this.toFahrenheit(),
            Kelvin: this.toKelvin()
        };
    }
}

module.exports = Reamur;