import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import Applogo from '../applogo';
import panel1 from '../images/panel1.png';
import homelogo from '../homelogo.svg';
import Appdata  from '../statedata';
import Splash from '../splash';
import Axios from 'axios';
import validate from'../validation/LoginValidation';
import {Link} from 'react-router-dom';
import   Register from './register';
     

class Loginpart extends React.Component{
    constructor(props){
        super();
            this.state={
                username:"",
                password:"",
                notification:""
            }
        
    }
  

    
   //sending data to the api serever for validation with axios
    componentDidMount(){    
        
    }

    sendPassword=(e)=>{
       this.setState(
            {
                username:e.target.value
                
            }
            
       )
        ;
        
    }
    sendUserName=(e)=>{
        this.setState(
            {
                password:e.target.value
            });
    }
     notification=()=>{
      const error= validate(this.state.password,this.state.username);
     return (error? <p className="text-red">{error.message}</p>:<p></p>);
    }

//sending the username and password to validate using axios

senddata=(e)=>{
    
    e.preventDefault();
   const error= validate(this.state.password,this.state.username);
     if(error.value){
          console.log(error.message);
     }
     
    else{
    
    Axios.post('http://localhost:5000/api/login', {
    
    "username":this.state.username,
    
    "password":this.state.password

  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });}
    
};
 //the render method
    render(){
        const [caption,bcaption]=Appdata;
        
        
        return(
 //the login panel           
       <div className="sign-text-div">
            
            <p className="H-caption">{caption.header_text} </p>  
            <p className="p-caption ft">{caption.goal_text}</p>
           
           <Link activeClassName="active-link"    to="/register" src={Register}>
           
          <button   className="continue-button">Get started</button>
        
         </Link>
           
            
     
      </div> 
   
        );
    }
    
}

export default Loginpart;