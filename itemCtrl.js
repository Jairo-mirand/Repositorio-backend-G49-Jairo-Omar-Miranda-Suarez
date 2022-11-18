const itemModel=require('../models/itemScheme')

const itemGuardar=(req,res)=>{
    console.log(req.body)
    try{
        const item= new itemModel(req.body)
        item.save()
        res.status(200).json({msj:"item almacenado con exito"})
    }catch(error){
        console.log("error item guardar "+ error)
    }
}
const itemListar= async (req,res)=>{
    try{
        const listadoItems= await itemModel.find()
        console.log(listadoItems)
        res.status(200).send(listadoItems)
    }catch(error){
        console.log("error ItemListar"+ error)
    }   
}
module.exports={
    itemGuardar,
    itemListar
}