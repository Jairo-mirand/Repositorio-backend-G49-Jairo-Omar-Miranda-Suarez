const express=require('express')
const router=express.Router()
const generosCtrl=require('../controllers/generoCtrl')
router.get('/',generosCtrl.generoListar)
router.post('/',generosCtrl.generoGuardar)
module.exports=router