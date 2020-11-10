
const API_URL = process.env.API_URL || "http://localhost:3001";
const { where } = require('sequelize');
const Camera  = require('../models/Camera');
module.exports ={
    async store(req,res){

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
                const newCamera = await Camera.create(
                    {
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
    async list(req,res){
       
        const cameras = await Camera.findAll({order:[['createdAt','DESC']]});
        return res.json(cameras);
    },
    async endvalue(req,res){
        const cameras = await Camera.findAll({order:[['createdAt','DESC']]});
        let data = cameras[0].dataValues;
        return res.json(data);
    },
    async showDateDay(req,res){
        const data = new Date();
        const day = data.getDate();
        const cameraData = await Camera.findAll({
            where:{
                day:`${day}`
            }
        });
        var arr= [];
        for(let i=0; i<24; i++){
            let soma = 0;
            let tam = 0;
            let media
            cameraData.map(item=>{
                if(i == item.hour){
                    soma = soma + item.quantity;
                    tam ++;
                }
            });
            media = soma/tam;
            let novaMedia = media.toFixed(2);
            if(novaMedia == 'NaN'){
                novaMedia = 0;
            }
            arr.push({average:+novaMedia,hour:i});

        }
        
         
        return res.json(arr);

    }


}