const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/movieP');
const db=mongoose.connection;
db.once('open',(err)=>{
    err?console.log(`wrong`):console.log(`db is connected!`);
});
module.exports=db;
