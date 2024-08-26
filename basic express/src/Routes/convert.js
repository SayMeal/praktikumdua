const express = require('express');
const RouterConvert = express.Router();
const Celcius = require('../controllers/convert suhu/Celcius');
const Fahrenheit = require('../controllers/convert suhu/Fahrenheit');
const Kelvin = require('../controllers/convert suhu/Kelvin');
const Reamur = require('../controllers/convert suhu/Reamur');

RouterConvert.get('/celcius/:c', Celcius.Celcius);
RouterConvert.get('/celcius/fahrenheit/:c', Celcius.Fahrenheit);
RouterConvert.get('/celcius/reamur/:c', Celcius.Reamur);
RouterConvert.get('/celcius/kelvin/:c', Celcius.Kelvin);

RouterConvert.get('/fahrenheit/:f', Fahrenheit.Fahrenheit);
RouterConvert.get('/fahrenheit/celcius/:f', Fahrenheit.Celcius);
RouterConvert.get('/fahrenheit/reamur/:f', Fahrenheit.Reamur);

RouterConvert.get('/kelvin/:k', Kelvin.Kelvin);
RouterConvert.get('/kelvin/celcius/:k', Kelvin.Celcius);
RouterConvert.get('/kelvin/fahrenheit/:k', Kelvin.Fahrenheit);
RouterConvert.get('/kelvin/reamur/:k', Kelvin.Reamur);

RouterConvert.get('/reamur/:r', Reamur.Reamur);
RouterConvert.get('/reamur/celcius/:r', Reamur.Celcius);
RouterConvert.get('/reamur/fahrenheit/:r', Reamur.Fahrenheit);
RouterConvert.get('/reamur/kelvin/:r', Reamur.Kelvin);

module.exports = RouterConvert

