const actorModel=require('../models/actorScheme')

const actorGuardar=(req,res)=>{
    console.log(req.body)
    try{
        const actor= new actorModel(req.body)
        actor.save()
        res.status(200).json({msj:"actor almacenado con exito"})
    }catch(error){
        console.log("error actor guardar "+ error)
    }
}
const actorListar= async (req,res)=>{
    try{
        const listadoReparto= await actorModel.find()
        console.log(listadoReparto)
        res.status(200).send(listadoReparto)
    }catch(error){
        console.log("error actorListar"+ error)
    }   
}
module.exports={
    actorGuardar,
    actorListar
}