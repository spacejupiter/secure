import React from 'react';
import ReactDom from 'react-dom';
import cloud from '../images/cloud.svg' 
import '../App.css';
import Appdata from '../statedata'


class Weatherpanel extends React.Component{
  render(){
      return(
          <div className="weather-panel">
          <h4>Ibadan</h4>
          <h1>25</h1>
          <img className="cloud-svg" src={cloud} />
          <p className="weather-text">Scattered Clouds</p>
          
          <div className="day-panel">{days}</div>
          </div>
      );
  }  
}
const Weather_days=(props)=>{
 return(
 <div>
   <p>{props.day}</p> 
     <p>{props.degree}</p>
     <img className="small-cloud" src={props.src} />
   </div>  
     
 );   
}

const [,,weather]=Appdata;

const days= weather.weather_days.map((daynumber)=>{
  return (<Weather_days day={daynumber} degree={21} src={cloud} />); 
})

export default Weatherpanel;