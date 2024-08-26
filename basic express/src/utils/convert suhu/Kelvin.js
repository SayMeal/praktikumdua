class Kelvin {
    constructor(value) {
        this.value = value;
    }

    toCelcius() {
        return this.value - 273.15;
    }

    toFahrenheit() {
        return (this.value - 273.15) * 9/5 + 32;
    }

    toReamur() {
        return (this.value - 273.15) * 4/5;
    }

    toAll(){
        return {
            Celcius: this.toCelcius(),
            Fahrenheit: this.toFahrenheit(),
            Reamur: this.toReamur()
        };
    }
}

module.exports = Kelvin;