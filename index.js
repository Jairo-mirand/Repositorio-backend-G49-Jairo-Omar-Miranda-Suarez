const express=require('express')
const app=express()
const puerto=3000
const db=require('./config/db')
db()
app.use(express.json())
app.use('/api',require('./routes/api'))
app.use('/api/items',require('./routes/items'))
app.use('/api/generos',require('./routes/generos'))
app.use('/api/actores',require('./routes/actores'))
app.listen(puerto,()=>{
    console.log("servidor activo en el puerto: "+ puerto)
})
