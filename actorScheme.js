const mongoose=require('mongoose')
const actorScheme= mongoose.Schema(
    {
        nombre:{
            type:String,
            require:true,
            trim: true 
        }
    }
)
module.exports=mongoose.model("actor",actorScheme)