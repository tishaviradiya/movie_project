const Details=require('../models/detailsModel');
module.exports.homePage=async(req,res)=>{
    let data=await Details.find();
    res.render('homePage',{
        displayData:data,
    });
}
module.exports.addDetails=async(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    var img='';
    if(req.file){
        img=Details.iPath+'/'+req.file.filename;
    }
    req.body.image=img;
    await Details.create(req.body);
    res.redirect('/homePage/details');
}
module.exports.detailsShow=async(req,res)=>{
    let detailsRecord=await Details.find();
    res.render('detailsShow',{
        detailsData:detailsRecord,
    });
}
