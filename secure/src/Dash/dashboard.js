
import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import Applogo from '../applogo';
import Sidenav from '../Dash/sidenav.js';
import Dashpanel from '../Dash/panel';


class Dashboard extends React.Component{
    constructor(props){
       super(); 
    }
    render(){
        return(
            <div className="Dashboard">
                <Sidenav /> 
             <Dashpanel />
      
             </div>
        );
        
    }
}

export default Dashboard;