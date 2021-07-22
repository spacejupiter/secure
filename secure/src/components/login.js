import  React from 'react';
import {useState} from 'react';
import ReactDom from 'react-dom';
import '../App.css';
import icon from '../images/icon-logo.svg';
import {Link,useHistory } from 'react-router-dom';
import Register from './register';
import axios from 'axios';
import {useCookies} from 'react-cookie';




export const Login =(props)=>{
    //declarations
    let[email,updateEmail]=useState();
    let [password,updatePassword]=useState();
    let [text,updateText]=useState('or sign in with your email');
    let history=useHistory();
    let [p_cookies,set_p_Cookies]=useCookies(['password']);
    let [e_cookies,set_e_Cookies]=useCookies(['email']);
    
    
    
    
        return(
            <div className="main-login-container">
            <img className="icon" src={icon}/>
                   <div className="row1">
            <p className="T-COLOR n-1 ft">New to Securefarmer?</p>
          <Link activeClassName="active-link" to="/register" src={Register}>  <button className="btn1"> create an account</button></Link>
                    </div>
               <div className="login-container">
          
            <h2 className="t-1-c ">Sign in</h2>
              <button className="g-btn"> Sign in with your Gmail</button>
           <p className="si-1 ft"> {text} </p><hr className="line1"/>
                  <Textinput change ={(e)=>{updateEmail(email=e.target.value)}} caption="Email adress" name =" E-mail adress" />
                  <Textinput change ={(e)=>{updatePassword(password=e.target.value)}} caption="Password" name  ="Password" />
                  <button onClick={async(e)=>{
                         e.preventDefault();
                         const  datas={
                         email:email,
                         password:password,
                        
                     }

               axios.post('http://localhost:5000/api/login',{datas})
                 .then((res)=>{
                   updateText(text=res.data);
                if (res.status===200){
                    set_p_Cookies('password',password,{path : '/'});
                    set_e_Cookies('email',email,{path : '/'});
                    console.log(p_cookies.password);
                 setTimeout(()=>{
                     history.push("/dashboard")
                 },1000)   
                }
            } ) }}
               className="sign1 ft">sign in</button>
                </div>
            </div>
        )
    }
    

const Textinput=(props)=>{
    return(
    <div>
       <b> <p className="c1">{props.caption}</p></b>
   <input onChange={props.change} className="login-inputs" type="text" placeholder={props.name}></input>
    </div>
    );
}
export default Login;