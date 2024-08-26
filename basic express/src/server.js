const express = require('express');
const app = express();
const port = 6934;
const { RouterBangunRuang } = require('./Routes/Bangun Ruang');
const RouterConver = require('./Routes/convert');
const RouterJenisBilangan = require('./Routes/JenisBilangan');
const RouterBMI = require('./Routes/BMI');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/bangunRuang', RouterBangunRuang);
app.use('/convert', RouterConver);
app.use('/jenisBilangan', RouterJenisBilangan);
app.use('/BMI', RouterBMI);

function startServer() {
    app.listen(port, () => {
        console.log(`Server berjalan di http://localhost:${port}`);
    });
}

module.exports = { startServer, app };
