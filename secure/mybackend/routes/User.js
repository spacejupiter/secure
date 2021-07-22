const userData=require('../model/UserModel')
const router=require('express').Router();
const userValidation= require('../Validation/userValidation');
const LoginValidation= require('../Validation/LoginValidation');
const Joi=require('@hapi/joi');




router.post('/signup', async(req,res)=>{
  const {error}= userValidation.validate(req.body.data);
if(error){
        res.status(201).send(error.details[0].message);
     }
    else{ 
      userData.find({email:req.body.data.email},async(error,data)=>{
          if(error){
           res.status(400).send(error);
              
          }
            
            else{
                if(!(data.length===0)){
                  res.status(201).send("email already exists") ; 
                   console.log(data);
                   console.log(req.body.data.email) ;
                    
                }
                else{
                    try{
                   const user= new userData({
                   firstname:req.body.data.firstname,
                   email:req.body.data.email,
                   surname:req.body.data.surname,
                       password:req.body.data.password
                 });
                   await user.save();
                    
                   res.status(202).send("thats great! "+req.body.data.firstname+" you are almost set!");
                  }
                      catch(error){
                      console.log(error);
                      res.send("there is an error");
                 
                     }  
                  
                }
                 
               
        }
        
           
    })  
}
 
})


module.exports= router;

    /****/