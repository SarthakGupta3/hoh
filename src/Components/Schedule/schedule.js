import React from 'react';

import './Schedule.css';
class Schedule extends React.Component{
    render(){
        return(
            <div>
                <h1 className="schedule-head">SCHEDULE</h1>
                <div className="Schedule-card">
                <div className="Schedule-day">
                    <p className="Day-current">Date</p>
                </div>
                <div className="Schedule-items">
                    <div className="schedule-single-item">
                        <h4 className="item-head">Time</h4>
                        <p>Event</p>
                    </div>
                    <div className="schedule-single-item">
                    <h4 className="item-head">Time</h4>
                        <p>Event</p>
                    </div>
                    <div className="schedule-single-item">
                    <h4 className="item-head">Time</h4>
                        <p>Event</p>
                    </div>
                    <div className="schedule-single-item">
                    <h4 className="item-head">Time</h4>
                        <p>Event</p>
                    </div>
                </div>
            </div>
            <div className="Schedule-card">
                <div className="Schedule-day">
                    <p className="Day-current">Date</p>
                </div>
                <div className="Schedule-items">
                    <div className="schedule-single-item">
                        <h4 className="item-head">Time</h4>
                        <p>Event</p>
                    </div>
                    <div className="schedule-single-item">
                    <h4 className="item-head">Time</h4>
                        <p>Event</p>
                    </div>
                    <div className="schedule-single-item">
                    <h4 className="item-head">Time</h4>
                        <p>Event</p>
                    </div>
                    <div className="schedule-single-item">
                    <h4 className="item-head">Time</h4>
                        <p>Event</p>
                    </div>
                </div>
            </div>
            <div className="Schedule-card">
                <div className="Schedule-day">
                    <p className="Day-current">Date</p>
                </div>
                <div className="Schedule-items">
                    <div className="schedule-single-item">
                        <h4 className="item-head">Time</h4>
                        <p>Event</p>
                    </div>
                    <div className="schedule-single-item">
                    <h4 className="item-head">Time</h4>
                        <p>Event</p>
                    </div>
                    <div className="schedule-single-item">
                    <h4 className="item-head">Time</h4>
                        <p>Event</p>
                    </div>
                    <div className="schedule-single-item">
                    <h4 className="item-head">Time</h4>
                        <p>Event</p>
                    </div>
                </div>
            </div>
            </div>
            
        )
    }
}

export default Schedule;