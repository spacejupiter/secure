const userData=require('../model/UserModel')
const router=require('express').Router();
const LoginValidation= require('../Validation/LoginValidation');
const Joi=require('@hapi/joi');




router.post('/login', async(req,res)=>{
  const {error}= LoginValidation.validate(req.body.datas);
if(error){
        res.status(201).send(error.details[0].message);
     }
    else{ 
      userData.find({email:req.body.datas.email},async(error,data)=>{
          if(error){
           res.status(400).send(error);
              
          }
            
            else{
                if((data.length===0)){
                  res.status(203).send("user not found"); 
                   console.log(data);
                   
                }
                else if (data[0].email===req.body.datas.email && data[0].password=== req.body.datas.password){
                   res.status(200).send('login sucess') ;
                 
                }
                else{
                    res.status(209).send('incorrect password');
                    console.log(data[0].email)
                }
                 
               
        }
        
           
    })  
}
 
})


module.exports= router;

    /****/




