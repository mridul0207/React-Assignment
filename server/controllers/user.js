const User=require('../models/User');
const Course=require('../models/Course');
const mongoose = require('mongoose');
exports.createEntry=async (req,res)=>{
    // const {name,email}=req.body;
    // const user = await User.create({name,email});
    return res.status(200).json({
        success:true,
        message:"Entry created successfully",
    })
}

exports.createCourse=async (req,res)=>{
    const {courseName,whatYouWillLearn}=req.body;
    await Course.create({courseName,whatYouWillLearn});
    return res.status(200).json({
        success:true,
        message:"Entry created successfully",
    })
}

exports.getDetails=async (req,res)=>{
    let entry=await User.find({firstName:"Mridul"}).populate("courses");
    console.log(entry);
    return res.status(200).json({
        success:true,
        message:"Fetched successfully"
    })
}