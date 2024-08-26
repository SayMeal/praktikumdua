const express = require('express');
const BMI = require('../controllers/BMI');
const BMIRouter = express.Router();

BMIRouter.post('/', BMI.BMI);

module.exports = BMIRouter;
