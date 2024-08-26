const express = require('express');
const RouterJenisBilangan = express.Router();
const Converter = require('../controllers/JenisBilangan');

const handleConversion = (req, res, conversionMethod) => {
    const { value, base } = req.body;
    const converter = new Converter(value, base);
    try {
        res.json(converter[conversionMethod]());
    } catch (err) {
        res.status(400).send('Invalid conversion method');
    }
};

RouterJenisBilangan.post('/decimal', (req, res) => handleConversion(req, res, 'toDecimal'));
RouterJenisBilangan.post('/binary', (req, res) => handleConversion(req, res, 'toBinary'));
RouterJenisBilangan.post('/octal', (req, res) => handleConversion(req, res, 'toOctal'));
RouterJenisBilangan.post('/hexadecimal', (req, res) => handleConversion(req, res, 'toHexadecimal'));
RouterJenisBilangan.post('/ascii', (req, res) => handleConversion(req, res, 'toAscii'));

RouterJenisBilangan.post('/all', (req, res) => {
    const { value, base } = req.body;
    const converter = new Converter(value, base);
    res.json(converter.toAll());
});

module.exports = RouterJenisBilangan;
