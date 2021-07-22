
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Applogo from './applogo';
import panel1 from './images/panel1.png';
import homelogo from './images/homelogo.svg';

import phone from './images/Group 9.svg'
import Appdata  from './statedata';
import Splash from './splash';
import Axios from 'axios';
import Loginpart from './components/loginpart1';

class Signin extends React.Component{
    constructor(props){
       super(); 
        this.state={
            s_placeholder:["username","password"],
            loading:"true",
            username:"",
            password:""
        }
    }
    
    componentDidMount(){
        setTimeout(()=>{
            this.setState({loading:false})
        },1000);
        
    }
     
    render(){
        return(
            this.state.loading ? <Splash /> : <Mainsignin />
            
        );
        
    }
  

}
            //sign up page
const Mainsignin =()=>{
            return(
        <div className="landing-page">
            <div className="hori-flow">
            <div>
        <img className="home-logo" src={homelogo}/> 
            <Loginpart H-caption="h" p-caption="h" />
             </div>
            <img className="phone" src={phone}/>
            </div>
             </div>
        );
            
            }
            
            
            


//the logo component of various sizes
const Logo=(props)=>{
    
    return(
    <div className="logo-container">
              <img className={props.logoclass} src={homelogo}/>
              <p className={props.textclass}>Securefarmer</p>
        </div>
    );
    
}




    
 


export default Signin;