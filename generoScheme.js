const mongoose=require('mongoose')
const generoScheme= mongoose.Schema(
    {
        nombre:{
            type:String,
            require:true,
            trim: true 
        }
    }
)
module.exports=mongoose.model("genero",generoScheme)