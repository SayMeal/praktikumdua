const Reamur = require('../../utils/convert suhu/Reamur');

exports.Reamur = (req, res) => {
    const r = parseFloat(req.params.r);
    const reamur = new Reamur(r);
    res.json(reamur.toAll());
}

exports.Celcius = (req, res) => {
    const r = parseFloat(req.params.r);
    const reamur = new Reamur(r);
    res.json(reamur.toCelcius());
}

exports.Fahrenheit = (req, res) => {
    const r = parseFloat(req.params.r);
    const reamur = new Reamur(r);
    res.json(reamur.toFahrenheit());
}

exports.Kelvin = (req, res) => {
    const r = parseFloat(req.params.r);
    const reamur = new Reamur(r);
    res.json(reamur.toKelvin());
}