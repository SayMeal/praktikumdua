const Kelvin = require('../../utils/convert suhu/Kelvin');

exports.Kelvin = (req, res) => {
    const k = parseFloat(req.params.k);
    const kelvin = new Kelvin(k);
    res.json(kelvin.toAll());
}

exports.Celcius = (req, res) => {
    const k = parseFloat(req.params.k);
    const kelvin = new Kelvin(k);
    res.json(kelvin.toCelcius());
}

exports.Fahrenheit = (req, res) => {
    const k = parseFloat(req.params.k);
    const kelvin = new Kelvin(k);
    res.json(kelvin.toFahrenheit());
}

exports.Reamur = (req, res) => {
    const k = parseFloat(req.params.k);
    const kelvin = new Kelvin(k);
    res.json(kelvin.toReamur());
}

