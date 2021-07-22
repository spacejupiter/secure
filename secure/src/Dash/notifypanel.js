import React from 'react';
import ReactDom from 'react-dom';
import homelogo from '../homelogo.svg';
import '../App.css';
import news from '../images/news.svg';
import metric from '../images/metric.svg'
import Appdata from '../statedata';

class NotifyPanel extends React.Component{
  render(){
      return(
          <div>
       <Panel name="Anslem" />
          
         <CultivationMetric percent="30" crop="Cassava Plantation" duration="(6 months)" /> 
          
          </div>
          
      );
  }  
}
const CultivationMetric = (props)=>{
    return(
    <div className="metric-container">
        <p className="crop-text ft">CROP : {props.crop}</p>
        <p className="percentage ft">{props.percent}%</p>
  <Progres   />
          <img className="meter" src={metric} />
          <div className="mo-panel">
          {month}
        <p className="duration-text ft">Duration {props.duration}</p>
     </div>     </div> ) 
}

const Progres = (props)=>{
    return(
        <div className="progressbar">
        <div className="progress"></div>
        </div>
    );
}


const MonthMetric = (props)=>{
    return(
    <div className="mo-div">
        <p className="month-metric ft">{props.month}</p>
        </div>
    );
}

const [,,MonthData]=Appdata;
const month= MonthData.month.map((m)=>{
   return (<MonthMetric month={m} />);
});

 const Panel=(props)=>{
    return(
    <div className="notify-panel">
         <img className="news" src={news} />
          <div className="notify-text">
          <h3 className="ft">Hello {props.name} {}!</h3>
          <p className="ft">The season is over your cassava is ready for   harvest !</p>
          </div>
          </div>
    );
    
}
 
export default NotifyPanel;
    