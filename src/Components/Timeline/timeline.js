import React from 'react';

import logo from '../../images/hoh.png';

import './timeline.css';
class prizes extends React.Component{
    render(){
        return(
            <div className="Timeline-Contain">
            <h1 className="timeline-head">SCHEDULE</h1>
            <div className="Timeline">
                <div className="Day-card">
                <h2 className="Daytag">8th March 2019</h2>
                <p className="Daytag subhead">Opening Ceremony and Pre Hackathon meet </p>
                 <div className="Day-contain">
                    <ul className="Schedule">
                    <li><span className="time">4:00 PM</span> :  <span className="event">Inaugration</span></li>
                    <li><span className="time">4:00 PM - 4:30 PM</span> : <span className="event">Schedule + Rules of Events</span> </li>
                    <li><span className="time">4:30 PM - 5:00 PM</span> : <span className="event">Github Keynote </span> </li>
                    <li><span className="time">5:00 PM - 5:30 PM</span> : <span className="event">Mozilla AR/VA Talk </span> </li>
                    <li><span className="time">5:30 PM - 6:00 PM</span> : <span className="event">Coding Blocks ML Talk </span> </li>
                    <li><span className="time">6:00 PM - 7:00 PM</span> : <span className="event">Doubts and Team formation discussions  </span> </li>
                    </ul>
                 </div>
                </div>
                <div className="Day-card">
                <h2 className="Daytag">8th March 2019</h2>
                <p className="Daytag subhead">Opening Ceremony and Pre Hackathon meet </p>
                <div className="Day-contain">
                    <ul className="Schedule">
                    <li><span className="time">4:00 PM</span> :  <span className="event">Inaugration</span></li>
                    <li><span className="time">4:00 PM - 4:30 PM</span> : <span className="event">Schedule + Rules of Events</span> </li>
                    <li><span className="time">4:30 PM - 5:00 PM</span> : <span className="event">Github Keynote </span> </li>
                    <li><span className="time">5:00 PM - 5:30 PM</span> : <span className="event">Mozilla AR/VA Talk </span> </li>
                    <li><span className="time">5:30 PM - 6:00 PM</span> : <span className="event">Coding Blocks ML Talk </span> </li>
                    <li><span className="time">6:00 PM - 7:00 PM</span> : <span className="event">Doubts and Team formation discussions  </span> </li>
                    </ul>
                 </div>
                </div>
                <div className="Day-card">
                <h2 className="Daytag">8th March 2019</h2>
                <p className="Daytag subhead">Opening Ceremony and Pre Hackathon meet </p>
                <div className="Day-contain">
                    <ul className="Schedule">
                    <li><span className="time">4:00 PM</span> :  <span className="event">Inaugration</span></li>
                    <li><span className="time">4:00 PM - 4:30 PM</span> : <span className="event">Schedule + Rules of Events</span> </li>
                    <li><span className="time">4:30 PM - 5:00 PM</span> : <span className="event">Github Keynote </span> </li>
                    <li><span className="time">5:00 PM - 5:30 PM</span> : <span className="event">Mozilla AR/VA Talk </span> </li>
                    <li><span className="time">5:30 PM - 6:00 PM</span> : <span className="event">Coding Blocks ML Talk </span> </li>
                    <li><span className="time">6:00 PM - 7:00 PM</span> : <span className="event">Doubts and Team formation discussions  </span> </li>
                    </ul>
                 </div>
                </div>
                
            </div>
            </div>
        )
    }
}

export default prizes;