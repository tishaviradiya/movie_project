const express=require('express');
const routs=express.Router();
const homeController=require('../controllers/homeController');
routs.get('/',homeController.home);
routs.use('/homePage',require('./homePage'));
module.exports=routs;