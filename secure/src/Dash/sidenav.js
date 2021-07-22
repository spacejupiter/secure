import React from 'react';
import ReactDom from 'react-dom';
import homelogo from '../homelogo.svg';
import payment from '../images/payment.svg'
import Dashboard from '../images/dashboard.svg'
import '../App.css';
import {Link} from 'react-router-dom'


class Sidenav extends React.Component{
  render(){
      return(
          <div className="side-nav">
           <NavIcon to="/dashboard" src={Dashboard} />
          <NavIcon to="/finance" src={payment} />
          </div>
      )
  }  
}
const NavIcon=(props)=>{
    return(
        <div className="nav-icon-container">
   <Link activeClassName="active-link" className="nav-link"  exact to={props.to}> 
         <img className="nav-icon" src={props.src} />
        
        </Link>
        </div>
    );
}
export default Sidenav;