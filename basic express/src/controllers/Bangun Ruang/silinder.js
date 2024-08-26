const Silinder = require('../../utils/Bangun Ruang/silinder');

exports.Silinder = (req, res) => {
    const r = parseFloat(req.params.r);
    const t = parseFloat(req.params.t);
    const silinder = new Silinder(r, t);
    res.json(silinder.hitungSemua());
}

exports.VolumeSilinder = (req, res) => {
    const r = parseFloat(req.params.r);
    const t = parseFloat(req.params.t);
    const silinder = new Silinder(r, t);
    res.json({ Volume: silinder.volume() });
}

exports.LuasSilinder = (req, res) => {
    const r = parseFloat(req.params.r);
    const t = parseFloat(req.params.t);
    const silinder = new Silinder(r, t);
    res.json({ Luas: silinder.luas() });
}

exports.DiagonalSilinder = (req, res) => {
    const r = parseFloat(req.params.r);
    const t = parseFloat(req.params.t);
    const silinder = new Silinder(r, t);
    res.json({ Diagonal: silinder.diagonal() });
}

exports.LuasPermukaanSilinder = (req, res) => {
    const r = parseFloat(req.params.r);
    const t = parseFloat(req.params.t);
    const silinder = new Silinder(r, t);
    res.json({ LuasPermukaan: silinder.luasPermukaan() });
}

