const API_URL = process.env.API_URL || "http://localhost:3001";
const { where } = require('sequelize');
const Pir = require('../models/Pir');

module.exports = {
    async store(req, res) {

        const data = new Date();
        const min = data.getMinutes();
        const hour = data.getHours();
        const day = data.getDate();
        const month = data.getMonth() + 1;
        const year = data.getFullYear();
        const quantity = req.body.quantity;

        const newPir = await Pir.create({
            quantity,
            min,
            hour,
            month,
            day,
            year,

        });
        return res.json(newPir);


    },
    async list(req, res) {
        const Pirs = await Pir.findAll();
        return res.json(Pirs);
    },
    async endvalue(req, res) {
        const Pirs = await Pir.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        });
        let data = Pirs[0].dataValues;
        return res.json(data);
    },
    async showDateDay(req, res) {
        const data = new Date();
        const day = data.getDate();
        const PirData = await Pir.findAll({
            where: {
                day: `${day}`
            }
        });
        var arr = [];
        for (let i = 0; i < 24; i++) {
            let soma = 0;
            let tam = 0;
            let media
            PirData.map(item => {
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
        const Pir = await Pir.findAll();
        return res.json(Pir);
    }
}