
import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import Applogo from '../applogo';
import Sidenav from '../Dash/sidenav.js';
import FinancePanel from '../Dash/financepanel.js'


class Finance extends React.Component{
    constructor(props){
       super(); 
    }
    render(){
        return(
            <div className="Dashboard">
                <Sidenav /> 
             <FinancePanel />
      
             </div>
        );
        
    }
    
}
export default Finance;
