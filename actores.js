const express=require('express')
const router=express.Router()
const actoresCtrl=require('../controllers/actorCtrl')
router.get('/',actoresCtrl.actorListar)
router.post('/',actoresCtrl.actorGuardar)
module.exports=router