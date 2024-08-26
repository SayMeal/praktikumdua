const Binary = require('../../utils/Jenis Bilangan/Binary');

exports.Binary = (req, res, next) => {
    const b = req.body.value;
    const binary = new Binary(b);
    res, next.json(binary.toAll());
}

exports.Decimal = (req, res, next) => {
    const b = req.body.value;
    const binary = new Binary(b);
    res, next.json(binary.toDecimal());
}

exports.Hexadecimal = (req, res, next) => {
    const b = req.body.value;
    const binary = new Binary(b);
    res, next.json(binary.toHexadecimal());
}

exports.Octal = (req, res, next) => {
    const b = req.body.value;
    const binary = new Binary(b);
    res, next.json(binary.toOctal());
}

exports.Ascii = (req, res, next) => {
    const b = req.body.value;
    const binary = new Binary(b);
    res, next.json(binary.toAscii());
}
