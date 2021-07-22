import React from 'react';
import ReactDom from 'react-dom';
import homelogo from '../homelogo.svg';
import '../App.css';



class ProfilePanel extends React.Component{
    constructor(props){
        super();
    }
    render(){ return(
            <div className="p-panel">
           <img src={this.props.settings}/> 
           <img src={this.props.mail}/>
        <img src={this.props.notify}/>
            <p className="ft">{this.props.name}</p>
             </div>
        );}
       
            
        
    }
export default ProfilePanel;