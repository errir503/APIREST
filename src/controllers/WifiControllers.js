const API_URL = process.env.API_URL || "http://localhost:3001";
const { where } = require('sequelize');
const Wifi = require('../models/Wifi');

module.exports = {
    async store(req, res) {

        const data = new Date();
        const min = data.getMinutes();
        const hour = data.getHours();
        const day = data.getDate();
        const month = data.getMonth() + 1;
        const year = data.getFullYear();
        const quantity = req.body.quantity;

        const newWif = await Wifi.create({
            quantity,
            min,
            hour,
            month,
            day,
            year,

        });
        return res.json(newWif);


    },
    async list(req, res) {
        const wifis = await Wifi.findAll();
        return res.json(wifis);
    },
    async endvalue(req, res) {
        const Wifis = await Wifi.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        });
        let data = Wifis[0].dataValues;
        return res.json(data);
    },
    async showDateDay(req, res) {
        const data = new Date();
        const day = data.getDate();
        const wifiData = await Wifi.findAll({
            where: {
                day: `${day}`
            }
        });
        var arr = [];
        for (let i = 0; i < 24; i++) {
            let soma = 0;
            let tam = 0;
            let media
            wifiData.map(item => {
                if (i == item.hour) {
                    soma = soma + item.quantity;
                    tam++;
                }
            });
            media = soma / tam;
            let novaMedia = media.toFixed(2);
            if (novaMedia == 'NaN') {
                novaMedia = 0;
            }
            arr.push({ average: +novaMedia, hour: i });

        }


        return res.json(arr);

    },
    async showDateMouth(req, res) {
        const wifi = await Wifi.findAll();
        return res.json(camera);
    }
}