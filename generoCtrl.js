const generoModel=require('../models/generoScheme')

const generoGuardar=(req,res)=>{
    console.log(req.body)
    try{
        const genero= new generoModel(req.body)
        genero.save()
        res.status(200).json({msj:"nuevo genero almacenado con exito"})
    }catch(error){
        console.log("error genero guardar "+ error)
    }
}
const generoListar= async (req,res)=>{
    try{
        const ListadoGeneros= await generoModel.find()
        console.log(ListadoGeneros)
        res.status(200).send(ListadoGeneros)
    }catch(error){
        console.log("error generoListar"+ error)
    }   
}
module.exports={
    generoGuardar,
    generoListar
}