const express = require('express');
const Kubus = require('../controllers/Bangun Ruang/kubus');
const Silinder = require('../controllers/Bangun Ruang/silinder');
const RouterBangunRuang = express.Router();

RouterBangunRuang.get('/kubus/:sisi', Kubus.Kubus);
RouterBangunRuang.get('/kubus/volume/:sisi', Kubus.VolumeKubus);
RouterBangunRuang.get('/kubus/luas/:sisi', Kubus.LuasKubus);
RouterBangunRuang.get('/kubus/keliling/:sisi', Kubus.KelilingKubus);
RouterBangunRuang.get('/kubus/diagonal/:sisi', Kubus.DiagonalKubus);

RouterBangunRuang.get('/silinder/:r/:t', Silinder.Silinder);
RouterBangunRuang.get('/silinder/volume/:r/:t', Silinder.VolumeSilinder);
RouterBangunRuang.get('/silinder/luas/:r/:t', Silinder.LuasSilinder);
RouterBangunRuang.get('/silinder/diagonal/:r/:t', Silinder.DiagonalSilinder);
RouterBangunRuang.get('/silinder/luasPermukaan/:r/:t', Silinder.LuasPermukaanSilinder);

module.exports = { RouterBangunRuang };
