const mongoose=require('mongoose');
require('dotenv').config();
exports.connect=async (req,res)=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>console.log("DB Connected successfully"));
}