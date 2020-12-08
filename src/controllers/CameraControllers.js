const API_URL = process.env.API_URL || "http://localhost:3001";

const Camera = require('../models/Camera');

module.exports = {
    async store(req, res) {

        const data = new Date();
        const min = data.getMinutes();
        const hour = data.getHours();
        const day = data.getDate();
        const month = data.getMonth() + 1;
        const year = data.getFullYear();
        const file_name = req.file.originalname;
        const size = req.file.size;
        const key = req.file.filename;
        const url = `${API_URL}/file/${key}`;
        const ip = req.body.ip;
        const quantity = req.body.quantity;
        const newCamera = await Camera.create({
            ip,
            quantity,
            file_name,
            url,
            size,
            min,
            hour,
            month,
            day,
            year,

        });
        return res.json(newCamera);

    },
    async list(req, res) {

        const cameras = await Camera.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        });
        return res.json(cameras);
    },
    async endvalue(req, res) {
        const cameras = await Camera.findOne({
            order: [
                ['createdAt', 'DESC']
            ]
        });
       
       
        return res.json(cameras);
    },
    async showDateDay(req, res) {
        const data = new Date();
        const day = data.getDate();
        const cameraData = await Camera.findAll({
            where: {
                day: `${day}`
            }
        });
        var arr = [];
        for (let i = 0; i < 24; i++) {
            let soma = 0;
            let tam = 0;
            let media
            cameraData.map(item => {
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
    async averagePerDay(req, res){
        const cameraData = await Camera.findAll()
    
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
        
        sum = 0;
        average.forEach(item => {
            sum += item;
        });
    
        return res.json(sum/average.length);
    },
    async crowdAndQuietDay(req, res){
        const blueData = await Bluetooth.findAll();
        let days = [0,0,0,0,0,0,0];
        let DaysOfWeek = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];

        blueData.forEach(item => {
            let date = new Date(item.year + "-" + item.month + "-" + item.day);
            day = date.getDay();
            days[day] += item.quantity;
        });

        var arrayMaxIndex = days.indexOf(Math.max.apply(null, days));
        var arrayMinIndex = days.indexOf(Math.min.apply(null, days));

        crowdAndQuiet = {
            'crowd': DaysOfWeek[arrayMaxIndex],
            'quiet': DaysOfWeek[arrayMinIndex]
        }

        return res.json(crowdAndQuiet);
    },
    async crowdAndQuietMonth(req, res){
        const blueData = await Bluetooth.findAll();
        let months = [0,0,0,0,0,0,0,0,0,0,0,0];
        let MonthsOfYear = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro',
        'Outubro', 'Novembro', 'Dezembro'];

        blueData.forEach(item => {
            let date = new Date(item.year + "-" + item.month + "-" + item.day);
            month = date.getMonth();
            months[month] += item.quantity;
        });

        var arrayMaxIndex = months.indexOf(Math.max.apply(null, months));
        var arrayMinIndex = months.indexOf(Math.min.apply(null, months));

        crowdAndQuiet = {
            'crowd': MonthsOfYear[arrayMaxIndex],
            'quiet': MonthsOfYear[arrayMinIndex]
        }

        return res.json(crowdAndQuiet);
    },
    async dateMoreAndLess(req, res){

        let MaxQuantity = await Camera.max('quantity');
        let MinQuantity = await Camera.min('quantity');
        let dateMore = await Camera.findAll({where: {quantity: MaxQuantity}});
        let dateLess = await Camera.findAll({where: {quantity: MinQuantity}});
        console.log(MaxQuantity);

        dateMoreAndLess = {
            dateMore: dateMore[0],
            dateLess: dateLess[0]
        }

        return res.json(dateMoreAndLess);
    },
    async showDateMouth(req, res) {
        const camera = await Camera.findAll();
        return res.json(camera);
    },

   

}