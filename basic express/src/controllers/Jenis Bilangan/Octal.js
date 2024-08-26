const Octal = require('../../utils/Jenis Bilangan/Octal');

exports.Octal = (req, res, next) => {
    const o = req.body.value;
    const octal = new Octal(o);
    res, next.json(octal.toAll());
}

exports.Decimal = (req, res, next) => {
    const o = req.body.value;
    const octal = new Octal(o);
    res, next.json(octal.toDecimal());
}

exports.Binary = (req, res, next) => {
    const o = req.body.value;
    const octal = new Octal(o);
    res, next.json(octal.toBinary());
}

exports.Hexadecimal = (req, res, next) => {
    const o = req.body.value;
    const octal = new Octal(o);
    res, next.json(octal.toHexadecimal());
}

exports.Ascii = (req, res, next) => {
    const o = req.body.value;
    const octal = new Octal(o);
    res, next.json(octal.toAscii());
}