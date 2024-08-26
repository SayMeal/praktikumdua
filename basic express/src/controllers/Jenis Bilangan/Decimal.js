const Decimal = require('../../utils/Jenis Bilangan/Decimal');

exports.Decimal = (req, res, next) => {
    const d = req.body.value;
    const decimal = new Decimal(d);
    res, next.json(decimal.toAll());
}

exports.Binary = (req, res, next) => {
    const d = req.body.value;
    const decimal = new Decimal(d);
    res, next.json(decimal.toBinary());
}

exports.Hexadecimal = (req, res, next) => {
    const d = req.body.value;
    const decimal = new Decimal(d);
    res, next.json(decimal.toHexadecimal());
}

exports.Octal = (req, res, next) => {
    const d = req.body.value;
    const decimal = new Decimal(d);
    res, next.json(decimal.toOctal());
}

exports.Ascii = (req, res, next) => {
    const d = req.body.value;
    const decimal = new Decimal(d);
    res, next.json(decimal.toAscii());
}