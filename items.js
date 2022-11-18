const express=require('express')
const router=express.Router()
const itemsCtrl=require('../controllers/itemCtrl')
router.get('/',itemsCtrl.itemListar)
router.post()
module.exports=router