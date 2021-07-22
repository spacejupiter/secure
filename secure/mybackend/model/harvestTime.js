const mongoose=require('mongoose');

const Schema=mongoose.Schema();

const harvestData=new Schema({
  cropsName:{
      type:String,
      required:true
  } ,
    quantity:{
        type:String,
        required:true
    },
    Landmass:{
        type:String,
        required:true
    },
    timestamps:true,

});
module.exports=mongoose.model('harvestData',harvestData);