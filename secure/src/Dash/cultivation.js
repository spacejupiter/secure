import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

class Cultivation extends React.Component{
    constructor(props){
        super();
        this.state={};
    }
    
    render(){
        return(
        <div className="c-panel">
            <div className="cul-div" >
                 <input placeholder="enter crop"/>
                 <input placeholder="enter quantity"/>
            </div> 
             <button> save </button>
    </div>
        );
    };
}
export default Cultivation;