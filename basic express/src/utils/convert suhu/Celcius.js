class Celcius {
    constructor(value) {
        this.value = value;
    }

    toFahrenheit() {
        return (this.value * 9/5) + 32;
    }

    toReamur() {
        return this.value * 4/5;
    }

    toKelvin() {
        return this.value + 273.15;
    }

    toAll(){
        return {
            Fahrenheit: this.toFahrenheit(),
            Reamur: this.toReamur(),
            Kelvin: this.toKelvin()
        };
    }
}

module.exports = Celcius;