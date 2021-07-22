import '../App.css';
import React from 'react';
import ReactDOM from 'react-dom';
 import reimg from '../images/reimg.svg';
import Appdata from '../statedata';
import logo from '../images/homelogo.svg';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

class Membership extends React.Component{
    constructor(props){
        super();
       this.state={
            
        }
    }
    render(){
        const Element =()=>{return(<FontAwesomeIcon icon={faArrowRight}  />)}
        return(
                                   
         <div className="member-container">
            <h1 className="ft ft-big"> A little moment please!</h1>
            <p className="ft ft-small"> we just want to make sure you've got a membership code</p>
            <p></p>
            <div  className="member-small-container">
                 <div className="styled-input">
                  <input  placeholder="E-nter member-ship code" className="member-input ft" type="password" /> 
                 <div className="arrow"> <Element className="arrow"/></div>
                   </div>
              </div> 
            </div>
                                   
        );
    }
}

export default Membership;