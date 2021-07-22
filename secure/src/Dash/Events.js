import React from 'react';
import ReactDom from 'react-dom';

class Event extends React.Component{
    constructor(){
        super();
        this.state={
          Events:   
          [
         {event:"water the farm",
         status:"done",
         },
              {event:"weed the farm",
         status:"pending",
         },
           {event:"fertilize the farm",
         status:"pending",
         },   
          ] 
        }
    }
    render(){
        const UpcomingEvents= this.state.Events.map((events)=>{
            return(<Eachevents event={events.event} status={events.status} />
                  
                  );
        })
        return(
        <div className="events-container">
            <h4 className="absolute-texts">Upcoming Events</h4>
            {UpcomingEvents}
            </div>
        
        );
    }
}

const Eachevents=(props)=>{
   return(
  <div className="event">
     <p> Event : {props.event} </p> 
       <p> Status : {props.status}</p>
    </div> 
   ) 
};
export default Event;