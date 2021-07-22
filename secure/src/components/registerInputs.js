import '../App.css';
import React from 'react';
import {useState} from  'react'
import ReactDOM from 'react-dom';
 import reimg from '../images/reimg.svg';
import Appdata from '../statedata';
 import axios from 'axios';
import { Redirect,useHistory  } from 'react-router-dom';
import { withRouter } from 'react-router';
import Homepage from '../App';

export  const  Textbox =(props)=>{
   let [firstname,updateFirstname]=useState();
    let [password,updatePassword]=useState();
    let [email,updateEmail]=useState();
       let [surname,updateSurname]=useState(); 
    let [myclass,updateClass]=useState('i-btn');
    let [disabled,updateDisable]=useState('false');
    let [text,updateText]=useState('See how to connect to your farming activities');
     
     let [changecolor,updateColor]=useState('default');
        
     let history =useHistory();
   
        return(
            <div>
            <p  className={changecolor +" ft"}>   {text} </p>
         <input onChange={ (e)=>{updateFirstname(firstname=e.target.value)}} className="input-tag" placeholder="First-name"/>
             <input onChange={(e)=>{updateSurname(surname=e.target.value)} } className="input-tag" placeholder=" Surnamee"/>
             <input onChange={(e)=>{updateEmail(email=e.target.value)}} className="input-tag" placeholder=" E-mail"/>
              <input onChange={(e)=>{updatePassword(password=e.target.value)}} className="input-tag" placeholder=" password"/>
             <button  onClick={async(e)=>{
             updateClass(myclass="i-btn-r"); 
                         e.preventDefault();
                         const  data={
                         firstname:firstname,
                         surname:surname,
                          email:email,
                               password:password
                     }

               axios.post('http://localhost:5000/api/signup',{data})
                 .then((res)=>{
                 console.log(res.data);
                console.log(res.status);
                 if (res){
                 updateClass(myclass="i-btn");
                 updateDisable(disabled="false")
                 updateText(text=JSON.stringify(res.data))
                 }
                if((res.status===201)){
                   {updateColor(changecolor="default-r") ; }}
                   
                else if((res.status===202)){
                  updateColor({changecolor:"default-g"}); 
                   
                    setTimeout(()=>{history.push('/login')},2000);
                    
                try{
                    console.log("redirect");
                }
                    catch(e){
                        console.log(e);
                    }
              
                    
                }
                else{
                  updateColor({changecolor:"default"}) ; 
                }
            }
           
            
    )
            
        
        
    }
} className={myclass}>continue </button>
        
             </div>
        );
    

}
        
    
 