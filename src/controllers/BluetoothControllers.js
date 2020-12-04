const API_URL = process.env.API_URL || "http://localhost:3001";
const { where } = require('sequelize');
const Bluetooth = require('../models/Bluetooth');
const { averagePerDay } = require('./CameraControllers');

module.exports = {
    async store(req, res) {

        const data = new Date();
        const min = data.getMinutes();
        const hour = data.getHours();
        const day = data.getDate();
        const month = data.getMonth() + 1;
        const year = data.getFullYear();
        const quantity = req.body.quantity;

        const newWif = await Bluetooth.create({
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
        const Bluetooths = await Bluetooth.findAll();
        return res.json(Bluetooths);
    },
    async endvalue(req, res) {
        const Bluetooths = await Bluetooth.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        });
        let data = Bluetooths[0].dataValues;
        return res.json(data);
    },
    async showDateDay(req, res) {
        const data = new Date();
        const day = data.getDate();
        const BluetoothData = await Bluetooth.findAll({
            where: {
                day: `${day}`
            }
        });
        var arr = [];
        for (let i = 0; i < 24; i++) {
            let soma = 0;
            let tam = 0;
            let media
            BluetoothData.map(item => {
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
    async crowdANDquietDay(req, res){
        const blueData = await Bluetooth.findAll();
        let days = [0,0,0,0,0,0,0];
        let DaysOfWeek = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];

        blueData.forEach(item => {
            let date = new Date(item.year + "-" + item.month + "-" + item.day);
            day = date.getDay();
            days[day] += 1;
        });

        var arrayMaxIndex = days.indexOf(Math.max.apply(null, days));
        var arrayMinIndex = days.indexOf(Math.min.apply(null, days));

        crowdANDquiet = {
            'crowd': DaysOfWeek[arrayMaxIndex],
            'quiet': DaysOfWeek[arrayMinIndex]
        }

        return res.json(crowdANDquiet);
    },
    async averagePerDay(req, res){
        const cameraData = await Bluetooth.findAll()
    
        date = {
            day: 0,
            month: 0,
            yes: 0
        }

        date.day = cameraData[0].day;
        date.month = cameraData[0].month;
        date.year = cameraData[0].year;

        average = [];
        sum = 0, i = 0;
    
        cameraData.forEach(row => {
            if ((row.day === date.day) && (row.month === date.month) && (date.year === row.year)){
                sum += row.quantity;
                i++;
            } else {         
                average.push((sum/i));
                
                sum = 0;
                i = 0;
    
                date.day = row.day;
                date.month = row.month;
                date.year = row.year;
    
                sum += row.quantity;
                i++;
            }
        });
    
        average.push((sum/i));
        
        //console.log(average);
        
        sum = 0;
        average.forEach(item => {
            sum += item;
        });
    
        return res.json(sum/average.length);
    },
    async showDateMouth(req, res) {
        const Bluetooth = await Bluetooth.findAll();
        return res.json(Bluetooth);
    }
}