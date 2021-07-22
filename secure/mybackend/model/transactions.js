const mongoose =require('mongoose');
const Schema=mongoose.Schema();

const transaction=new Schema({
    item:{
    required:true,
        trim:true,
        type:String
    },
    description:{
        required:true,
        trim:true,
        type:String
    },
    amount:{
        required:true,
        trim:true,
        type:String
    },
})
moudule.exports=mongoose.model('transaction',transaction);