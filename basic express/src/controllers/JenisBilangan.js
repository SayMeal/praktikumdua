const Converter = require('../utils/JenisBilangan');

const handleConversion = (req, res, conversionMethod) => {
    const { value, base } = req.body;
    const converter = new Converter(value, base);
    try {
        res.json(converter[conversionMethod]());
    } catch (err) {
        res.status(400).send('Invalid conversion method');
    }
};

exports.convertToDecimal = (req, res, next) => {
    handleConversion(req, res, 'toDecimal');
};

exports.convertToBinary = (req, res, next) => {
    handleConversion(req, res, 'toBinary');
};

exports.convertToOctal = (req, res, next) => {
    handleConversion(req, res, 'toOctal');
};

exports.convertToHexadecimal = (req, res, next) => {
    handleConversion(req, res, 'toHexadecimal');
};

exports.convertToAscii = (req, res, next) => {
    handleConversion(req, res, 'toAscii');
};

exports.convertToAll = (req, res, next) => {
    const { value, base } = req.body;
    const converter = new Converter(value, base);
    res.json(converter.toAll());
};

module.exports = Converter;