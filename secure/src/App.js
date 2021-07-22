import React from 'react';
import logo from './logo.svg';
import homelogo from './homelogo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import Splash from './splash'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Applogo from './applogo';
import Dashboard from './Dash/dashboard';
import Signin from './signin';
import Finance from './Dash/finance';
import Sidenav from './Dash/sidenav'
import AdminDashboard from './Dashboard'
import Register from './components/register'
import Login from './components/login'
import membership from './components/membership'
class Homepage extends React.Component{
    constructor(props){
        super();
        this.state={
            status:Register,
        };
    }
    
    //this method  changes the state
    
    Changestatus=(name)=>{
       this.props.Changestate();
    }
    render(){
        return(
            <Router>
            
             
            <Switch>
            
            <Route path="/" exact component={Signin}/>
             <Route path="/admin" exact component={AdminDashboard}/>
             <Route path="/dashboard"  component={Dashboard}/>
            <Route path="/finance" exact component={Finance} />
            // redirect to membership page if status is false
            <Route  path={"/membership"} exact component={membership} />
            <Route  path={"/register"} exact component={this.state.status} />
             <Route path="/login" exact component={Login} />
           
            
            </Switch>
            </Router>
            
            
        );
    };
}
    


export default Homepage;
