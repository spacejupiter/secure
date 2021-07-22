import React from 'react';
import logo from './logo.svg';
import homelogo from './homelogo.svg';
import ReactDOM from 'react-dom';
import './App.css';



class Applogo extends React.Component{
    constructor(props){
        super();
        this.state={
            logo:"SecureFarmer"
        };
    }
    render(){
        return(
            <div className="logo-div">
           <img className="homelogo" src={homelogo} alt={this.props.alt} />
            <p> {this.props.brandname}</p>
            </div>
        );
    };
}
    


export default Applogo;
