const Fahrenheit = require('../../utils/convert suhu/Fahrenheit');


exports.Fahrenheit = (req, res) => {
    const f = parseFloat(req.params.f);
    const fahrenheit = new Fahrenheit(f);
    res.json(fahrenheit.toAll());
}

exports.Celcius = (req, res) => {
    const f = parseFloat(req.params.f);
    const fahrenheit = new Fahrenheit(f);
    res.json(fahrenheit.toCelcius());
}

exports.Reamur = (req, res) => {
    const f = parseFloat(req.params.f);
    const fahrenheit = new Fahrenheit(f);
    res.json(fahrenheit.toReamur());
}