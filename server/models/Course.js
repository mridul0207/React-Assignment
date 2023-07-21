const mongoose=require('mongoose');
const courseSchema=new mongoose.Schema({
    courseName:{
        type:String
    },
    whatYouWillLearn:{
        type:String
    }
})

module.exports=mongoose.model("Course",courseSchema);