
import React from 'react';
import homelogo from './homelogo.svg';
import ReactDOM from 'react-dom';
import './App.css';

import Applogo from './applogo';


class Splash extends React.Component{
    constructor(props){
        super();
        this.state={};
    }
    render(){
        return(
            <div className="App-header" >
          <Applogo brandname=""/>
            </div>
        );
    };
}
    


export default Splash;