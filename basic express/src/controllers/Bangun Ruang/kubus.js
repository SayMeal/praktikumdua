
const Kubus = require('../../utils/Bangun Ruang/kubus');

exports.Kubus = (req, res) => {
    const sisi = parseFloat(req.params.sisi);
    const kubus = new Kubus(sisi);
    res.json(kubus.hitungSemua());
}

exports.VolumeKubus = (req, res) => {
    const sisi = parseFloat(req.params.sisi);
    const kubus = new Kubus(sisi);
    res.json({ Volume: kubus.volume() });
}

exports.LuasKubus = (req, res) => {
    const sisi = parseFloat(req.params.sisi);
    const kubus = new Kubus(sisi);
    res.json({ Luas: kubus.luas() });
}

exports.KelilingKubus = (req, res) => {
    const sisi = parseFloat(req.params.sisi);
    const kubus = new Kubus(sisi);
    res.json({ Keliling: kubus.keliling() });
}

exports.DiagonalKubus = (req, res) => {
    const sisi = parseFloat(req.params.sisi);
    const kubus = new Kubus(sisi);
    res.json({ Diagonal: kubus.diagonal() });
}
