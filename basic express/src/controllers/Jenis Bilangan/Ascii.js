const Ascii = require('../../utils/Jenis Bilangan/Ascii');

exports.Ascii = (req, res, next) => {
    const a = req.body.value;
    const ascii = new Ascii(a);
    res, next.json(ascii.toAll());
}

exports.Binary = (req, res, next) => {
    const a = req.body.value;
    const ascii = new Ascii(a);
    res, next.json(ascii.toBinary());
}

exports.Decimal = (req, res, next) => {
    const a = req.body.value;
    const ascii = new Ascii(a);
    res, next.json(ascii.toDecimal());
}

exports.Hexadecimal = (req, res, next) => {
    const a = req.body.value;
    const ascii = new Ascii(a);
    res, next.json(ascii.toHexadecimal());
}

exports.Octal = (req, res, next) => {
    const a = req.body.value;
    const ascii = new Ascii(a);
    res, next.json(ascii.toOctal());
}
