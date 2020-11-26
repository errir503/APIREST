
const Rfid = require('../models/Rfid');
const RFID = require('../models/Rfid');
module.exports ={
    async rfidStore(req,res){
        const entrada = req.body.entrada;
        const data_hora = req.body.data_hora;
        const id_rfid = req.body.id_rfid;
        const data = new Date();
        const min = data.getMinutes();
        const hour = data.getHours();
        const day = data.getDate();
        const month = data.getMonth() + 1;
        const year = data.getFullYear();

        const novoRfid = await RFID.create({
            entrada,
            data_hora,
            min,
            hour,
            day,
            month,
            year,
            id_rfid
        });

        return res.json(novoRfid);
    },
    async rfidUpdate(req,res){
        const entrada = req.body.entrada;
        const data_hora = req.body.data_hora;
        const id_rfid = req.body.id_rfid;
        const data = new Date();
        const min = data.getMinutes();
        const hour = data.getHours();
        const day = data.getDate();
        const month = data.getMonth() + 1;
        const year = data.getFullYear();

      const upRfid =  await RFID.update(
            {
                entrada,
                data_hora,
                min,
                hour,
                day,
                month,
                year,
            },
            {
                where:{id_rfid:id_rfid}
            }
        );
       return res.json(upRfid); 
    },
    async rfiQuantity(req,res){
        const data = new Date();
        const day = data.getDate();
        const quantity = await RFID.findAndCountAll(
        {
                where:{
                    day: `${day}`,
                    entrada:true,
                }
        }
        );
        return res.json({
            quantity:quantity.count,
            data
        });
    }
}