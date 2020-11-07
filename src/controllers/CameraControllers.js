
const API_URL = process.env.API_URL || "http://localhost:3001";
const Camera  = require('../models/Camera');
module.exports ={
    async store(req,res){

           
                const file_name = req.file.originalname;
                const size = req.file.size;
                const key = req.file.filename;
                const url = `${API_URL}/file/${key}`;
                const ip = req.body.ip;
                const quantity = req.body.quantity;              
                const newCamera = await Camera.create({ip,quantity,file_name,url,size});               
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
    


}