const express=require('express');
const router=express.Router();
const {createEntry,createCourse,getDetails}=require('../controllers/user');
const {getLocation} = require('../controllers/location')
router.post('/createentry',createEntry);
router.post('/createcourse',createCourse);
router.get('/getdetails',getDetails);
router.get('/location',getLocation);
module.exports=router;