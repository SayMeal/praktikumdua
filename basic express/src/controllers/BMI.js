const BMI = require("../utils/BMI");

exports.BMI = (req, res) => {
    const { weight, height } = req.body;

    if (!weight || !height) {
        return res.status(400).send("Weight and height are required.");
    }

    const bmi = new BMI();
    res.json( bmi.getBMIResult(weight, height) );
};
