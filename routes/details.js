const express=require('express');
const routs=express.Router();
const detailsController=require('../controllers/detailsController');
routs.get('/',detailsController.details);
module.exports=routs;