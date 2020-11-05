const Camera = require('../model/Camera');

module.exports ={
    async store(req,res){

          //const obj =  isEmpty(req.body);
          
          console.log('file',req.file);
          console.log('data',req.body);
         /* if(obj){
              return res.json({
                  erro:true,
                 messagem:"operação falhou objeto vazio"
              })
          }*/

         

            const {
                ip,
                quantity,
            }= req.body;

            
                const file_name = req.file.originalname;
                const size = req.file.size;
                const key = req.file.filename;
                const url = `${API_URL}/file/${key}`;
            
                const camera = await Camera.findOne({where:{ip:ip}});
                if(camera){
                        
                    const newCamera = await Camera.update({ip,quantity,file_name,url,size},{where:{id:camera.id}});
                    return res.json({
                        erro: false,
                        messagem: "operação realizada com sucesso",
                    });
                }else{
                    const newCamera = await Camera.create({ip,quantity,file_name,url,size});
                    return res.json(newCamera);
                }
           
          return res.send();
                 
            
    },
    async list(req,res){
        const cameras = await Camera.findAll();
        return res.json(cameras);
    }

}