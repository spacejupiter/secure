import '../App.css';
import React from 'react';
import ReactDOM from 'react-dom';
 import reimg from '../images/reimg.svg';
import Appdata from '../statedata';
import logo from '../images/homelogo.svg';
import {Link} from 'react-router-dom';
import Login from './login';
import icon from '../images/icon-logo.svg';
import {Textbox} from './registerInputs.js';
import axios from 'axios';

class Register extends React.Component{
    constructor(props){
        //onFirstname=onFirstname().bind(this);
      super();
        this.state={
            firstname:"",
                surname:"",
                    email:"",
                     
        }
    }
    
    
      //input tag codes
      
     // 
      
    /**
    this code builds the textbox jx

    **/
    /*ndToDatabase=async(e)=>{
           this.setState({class:"i-btn-r"}); 
           e.preventDefault();
          const  data={
                firstname:this.state.firstname,
                  surname:this.state.surname,
                    email:this.state.email
            }
          
        axios.post('http://localhost:5000/api/signup',{data})
            .then((res)=>{
            console.log(res.data);
            console.log(res.status);
            if (res){
                 this.setState({class:"i-btn"});
                this.setState({disabled:"false"})
                this.setState({text:JSON.stringify(res.data)})
                if((res.status===201)){
                    this.setState({changeColor:"default-r"});
                   
                }
                else if((res.status===202)){
                  this.setState({changeColor:"default-g"}); 
                try{
                }
                    catch(e){
                        console.log(e);
                    }
              
                    
                }
                else{
                  this.setState({changeColor:"default"}) ; 
                }
            }
           
            
        })
            
        
        
    }**/
    
    render(){
        
    


        return(
            <div className="register-main-container">
            
            <img className="icon1" src={icon}/>
                <div className="register-div">
                      
                    <form className="input-form-div">
                           <h2 className="">Set up your farming account</h2>
                         
                           <Textbox />
                          
                           <p > already have an account 
                            <Link activeClassName="active-link" to="/login" src={Login}>
                            <p className="diff">Sign in</p></Link></p>
                     </form>
                    <div className="register-img-panel">
                           <img className="register-img" src={reimg}/>
                     </div>
                 </div>
            </div>
        );
    }
}
const [s_text]=Appdata;
const signin_text=s_text.signin_text;












export default Register;