const express=require('express');
const port=8001;
const path=require('path');
const db=require('./config/mongoose');
const app=express();
app.use(express.urlencoded());
app.use('/uploads',express.static(path.join(__dirname,'uploads')));
app.use(express.static(path.join(__dirname,'assets')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use('/',require('./routes'));
app.listen(port,(err)=>{
    err?console.log('wrong'):console.log(`port is running on server! ${port}`);
});