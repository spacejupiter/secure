const validation=(value,value2)=>{
    const error={
        message:"field cannot be empty",
        value:true
    }
   const state=value;
    if (state==="" || value2==""){
        return error;
    }
    error.value=false;
  return error;
}
export default validation;