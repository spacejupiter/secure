import React from 'react';
import ReactDom from 'react-dom';
import homelogo from '../homelogo.svg';
import '../App.css';
import Weatherpanel from './weatherpanel';
import  ProfilePanel from './profileact';
import NotifyPanel from './notifypanel';
import notification from '../images/notification.svg';
import mail from '../images/mail.svg';
import settings from '../images/settings.svg';
import Cultivation from './cultivation';

class Dashpanel extends React.Component{
  render(){
      return(
          <div className="dash-panel">
          <Weatherpanel />
          <NotifyPanel />
          <ProfilePanel notify={notification} settings={settings} mail={mail} name="Chibuike Stephens" />
          <Cultivation />
          </div>
      );
  }  
}
export default Dashpanel;