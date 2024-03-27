const mongoose=require('mongoose');
const multer=require('multer');
const path=require('path');
const imgPath='/uploads';
const detailsSchema=mongoose.Schema({
    title:String,
    name:String,
    rating:Number,
    actorname:String,
    plot:String,
    types:String,
    screen:String,
    language:Array,
    date:String,
    image:String,
});
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'..',imgPath));
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname+'-'+Date.now());
    }
});
detailsSchema.statics.uploadImage=multer({storage:storage}).single('image');
detailsSchema.statics.iPath=imgPath;
const Details=mongoose.model('Details',detailsSchema);
module.exports=Details;