import React from 'react';
import ReactDom from 'react-dom';
import './App.css';
import Sidenav from './Dash/sidenav';

class AdminDashboard extends React.Component{
    constructor(props){
        super();
        this.state={}
    }
    
    render(){
        return(
            
 <div className="Dashboard">
    <Sidenav />
            <div className="dash-panel">
             <Register />
            </div>
     </div>  
            );
    } 
}

const Register= (props)=>{
    return(
    <div className="admin-register">
        
        <div className="r-div">
             <input value={props.username}  placeholder="Username"/>
        </div>
        <div className="r-div">
             <input placeholder="Password"/>
        </div>
        <div className="r-div">
          
             <input placeholder="Confirm password"/>
        </div>
        <div className="r-div">
             <input placeholder="Email"/>
        </div>
      <button> sign up</button>  
        </div>
    )   
    }


export default AdminDashboard;