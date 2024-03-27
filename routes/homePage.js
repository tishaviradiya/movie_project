const Details=require('../models/detailsModel');
const express=require('express');
const routs=express.Router();
const homePageController=require('../controllers/homePageController');
routs.get('/',homePageController.homePage);
routs.post('/addDetails',Details.uploadImage,homePageController.addDetails);
routs.use('/details',require('./details'));
routs.get('/detailsShow',homePageController.detailsShow);
module.exports=routs;