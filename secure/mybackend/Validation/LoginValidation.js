const Joi=require('@hapi/joi');

const login=Joi.object({
    email:Joi.string().required(),
    password:Joi.string().required().min(6)
    
});
module.exports=login;