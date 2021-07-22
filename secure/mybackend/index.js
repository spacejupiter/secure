const express=require ('express');
const cors= require ('cors');
require('dotenv').config();
const app=express();
const port= process.env.PORT || 5000;
const User= require('./routes/User');
const login= require('./routes/authentication');
const mongoose = require('mongoose');
const route=require('express').Router();
const test= require('./routes/test');

app.use(cors());
app.use(express.json());





async function database(){
 const uri=process.env.ATLAS_URI;
   try{
      await mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology: true });
       console.log('database connected sucesfully on mongodb');
   } 
  catch(e){
      console.log(e);
  }
}
database();

app.use('/api',User);
app.use('/test',test);
app.use('/api',login);


app.listen(port,()=>{
   console.log(`server started on port ${port} `) ;
});