import React from 'react';
import ReactDom from 'react-dom';
import homelogo from '../homelogo.svg';
import '../App.css';
import Panel from './notifypanel.js'
import curvedlogo from '../images/curvedlogo.png'
import monthdata from '../monthstate.js';
import upload from '../images/upload.svg';
import  ProfilePanel from './profileact';
import NotifyPanel from './notifypanel';
import notification from '../images/notification.svg';
import mail from '../images/mail.svg';
import settings from '../images/settings.svg';
import seed from '../images/coffee.svg';
import tractor from '../images/tractor.svg';
import worker from '../images/worker.svg';
import plus from '../images/more.svg';
import expenses from '../images/expenses.svg'
import loan from '../images/loan.svg'
import Events from './Events.js'




class FinancePanel extends React.Component{
    constructor(
    ){
        super();
        this.state={
            Button:{
               name:["Loan","Spending","Balance"] 
            }
        }    
    }

  render(){
      
       const btns = this.state.Button.name.map((names)=>{
      return (<OptionButton name={names} classe="button-option"/>);  
    })
       
      return(
          
          <div className="dash-panel">
             <div className="transaction-panel"> 
                <h4 className="ft">Activities</h4>
                 <div className="button-div"> {btns}</div>
                     <TPanel name="Mr Seyi Oyenuga" amount=" $45 000 000.86" />
                      <div className="rt ft"><h4 >Recent transactions</h4></div>
          
                       <div className="history-panel">
                       <div className="add"><img src={plus} /></div>
                               <History src={expenses} name="Seyi Stephens" status="sent" amount="$450" />
                               <History src={loan} name="chibuike anslem" status="received" amount="$450" />
                                <History src={expenses} name="James simon" status="received" amount="$850.44" />
          
                             </div>
                                  </div>
                                      <RFpanel />
                                         <ProfilePanel notify={notification} settings={settings} mail={mail} name="Chibuike Stephens" />  
                                            <Pricing />
                                           <Events />
                                      </div>
      );
  }  
}
class RFpanel extends React.Component{
          constructor(){
          super();
      }
      render(){
          return(
              <div className="rf-panel">
              <div className="expen">
              <h3 className="ft">My Expenditures</h3>
              <h4 className="ft">$8,000,000</h4>
              </div>
                 <Graph />
              <Upload />
                 </div>
          );
                 
          }
                 }
class Graph extends React.Component{
 
    constructor(){
        super();
        this.state={
            monthgraph:monthdata
            
        }
    }
    render(){
        
        const bargraph =this.state.monthgraph.map((graphs)=>{
            return (<Horizontal month={graphs.month} bar={graphs.class}/>);
        });
        
        
    return(
      <div className="graph">
         <div className="vertical-container">
               <Vertical number="8k" />
      <Vertical number="8k" />
                  </div> 
              <div className="horizontal-container">
        {bargraph}
                           </div> 
         <div className="line"></div>
         </div>  
        );
    }
};
 
                                                  
                                                  

//the vertical graph numbers
  const Vertical=(props)=>{
   return(
       <div className="vertical-numbers">
       <p className="ft">{props.number}</p>
       </div>
         )   
  }
        
  
  const Horizontal=(props)=>{
      return(
          <div className="H-container">
      <div className={props.bar}></div>
          <p className="mont ft">
          {props.month}
          </p>
          </div>
      );
  }

const TPanel=(props)=>{
    return(
    <div className="T-panel">
        <h4 className="card-name ft">{props.name}</h4>
        <h4 className ="card-amount ft">{props.amount}</h4>
        <img className="curvedlogo" src={curvedlogo}/>
        </div>
    ); 
}

const History=(props)=>{
 return(
 <div className="history-transactions">
          
             <div>
     <div className="icon-history">
                <img src={props.src} />
                   <h5 className="ft">{props.name}</h5>
                </div>
                   <p className="status ft">{props.status}</p>
                  </div>
         <h6 className="amt ft">{props.amount}</h6>
     </div>
 );   
}


const OptionButton= (props)=>{
    return(
    <button className={props.classe}> {props.name} </button>
    );
}

class Upload extends React.Component{
    constructor(){
        super();
    }
  render(){
      return(
      <div className="upload-panel">
        <File  />
          </div>
      );
  }  
}
        
        const File= ()=>{
            return(<div className="file">
                   <h3 className="invoice-text ft">Invoice</h3>
                   <img className="upload-img" src={upload}/>
                   </div>
                  );
        }
class Pricing extends React.Component{
            constructor(){
              super();
                this.state={
                   service: [
                    {   service:"Tractor",
                        src:tractor,
                     amount:"5000"
                             },
                    {
                        service:"Seed",
                        src:seed,
                        amount:"489.45"
                    },
                    {
                        service:"Labor",
                        src:worker,
                        amount:"8000"
                    }
                    ]
                }
            }
    render(){
        const eachServices = this.state.service.map((serve)=>{
      return  <Services text={serve.service} serviceimage={serve.src} amount={serve.amount} />
        })
        return(
        <div className = "pricing">
            <h5 className="hire-text ft">Hire Services</h5>
            {eachServices}
            </div>
        );
    }
        }

        const Services= (props)=>{
            return(
                <div className="services">
               <div className="service-row">
                <p className="service-text ft">{props.text} </p>
                <img src={props.serviceimage} />
                <p className="ft">${props.amount}</p>
                </div>
                </div>
            );
        } 

export default FinancePanel;