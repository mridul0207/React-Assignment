const express=require('express');
const app=express();
const db=require('./config/database');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const router=require('./routes/Routes');
app.use('/api/v1',router);
const cors = require('cors');
app.use(cors());
app.use(cors({
	origin: 'http://localhost:3000',
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	allowedHeaders: ['Content-Type', 'Authorization']  
}));
	
db.connect();
app.listen(4001,()=>console.log("Server running on port 4001"));