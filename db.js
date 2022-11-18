const mongoose=require('mongoose')
const URIDB='mongodb://localhost:27017/PlataformaStreaming'
module.exports=()=>{
    const conn=()=>{
        mongoose.connect(
            URIDB,
            {
                keepAlive:true,
                useNewUrlParser:true,
                useUnifiedTopology: true,
                family:4
            },
            (err)=>{
                if(err){
                    console.log("Error de conexion" + err)
                }else{
                    console.log("conexion satisfactoria")
                }
            }
        )
    }
    conn()
}