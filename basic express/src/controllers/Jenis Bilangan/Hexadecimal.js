const Hexadecimal = require('../../utils/Jenis Bilangan/Hexadecimal');

exports.Hexadecimal = (req, res, next) => {
    const h = req.body.value;
    const hexadecimal = new Hexadecimal(h);
    res, next.json(hexadecimal.toAll());
}

exports.Decimal = (req, res, next) => {
    const h = req.body.value;
    const hexadecimal = new Hexadecimal(h);
    res, next.json(hexadecimal.toDecimal());
}

exports.Binary = (req, res, next) => {
    const h = req.body.value;
    const hexadecimal = new Hexadecimal(h);
    res, next.json(hexadecimal.toBinary());
}

exports.Octal = (req, res, next) => {
    const h = req.body.value;
    const hexadecimal = new Hexadecimal(h);
    res, next.json(hexadecimal.toOctal());
}

exports.Ascii = (req, res, next) => {
    const h = req.body.value;
    const hexadecimal = new Hexadecimal(h);
    res, next.json(hexadecimal.toAscii());
}

