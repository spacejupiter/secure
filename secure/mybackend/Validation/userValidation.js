const Joi=require('@hapi/joi');

const user=Joi.object({
    firstname:Joi.string().required(),
    email:Joi.string().required().email({minDomainSegments:2,tlds:{allow:['com','net']}}),
    surname:Joi.string().required(),
    password:Joi.string().required().min(8)
    
});
module.exports=user;