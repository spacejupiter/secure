const harvestdata=require('../model/harvestTime');
const router=require('express').Router();
router.post('/harvest', async(req,res)=>{
    const harvest =new harvestdata({
       cropsName:req.body.cropsname,
        Landmass:req.body.Landmass,
        quantity:req.body.quantity
    });
    try{
        const savedHarvest= await harvest.save();
    }
   catch(err) {
      res.send(err) ; 
    }
    
})
