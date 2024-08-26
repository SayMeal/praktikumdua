const Celcius = require('../../utils/convert suhu/Celcius');

exports.Celcius = (req, res) => {
    const c = parseFloat(req.params.c);
    const celcius = new Celcius(c);
    res.json(celcius.toAll());
}

exports.Fahrenheit = (req, res) => {
    const c = parseFloat(req.params.c);
    const celcius = new Celcius(c);
    res.json(celcius.toFahrenheit());
}

exports.Reamur = (req, res) => {
    const c = parseFloat(req.params.c);
    const celcius = new Celcius(c);
    res.json(celcius.toReamur());
}

exports.Kelvin = (req, res) => {
    const c = parseFloat(req.params.c);
    const celcius = new Celcius(c);
    res.json(celcius.toKelvin());
}