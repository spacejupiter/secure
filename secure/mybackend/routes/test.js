const router=require('express').Router();
router.get('/testapi',(req,res)=>{
  res.send('hey bitch');  
});
module.exports=router;