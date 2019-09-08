import React from 'react';

import logo from '../../images/hoh.png';

import Swiper from 'swiper';
import anime from 'animejs';
import './timeline.css';
class prizes extends React.Component{
    componentDidMount(){
        var swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows : true,
            },
            pagination: {
              el: '.swiper-pagination',
            },
          });
         
    }
        
    render(){
        return(
            <div className="Timeline-Contain swiper-container hidden" id="schedule">
            <h1 className="timeline-head">SCHEDULE</h1>
            <div className="Timeline swiper-wrapper">
                <div className="Day-card swiper-slide">
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
                <div className="Day-card swiper-slide">
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
                <div className="Day-card swiper-slide">
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
            <div class="swiper-pagination"></div>
            </div>
//             <div class="swiper-container">
//     <div class="swiper-wrapper">
//       <div class="swiper-slide"></div>
//       <div class="swiper-slide"></div>
//       <div class="swiper-slide"></div>
//       <div class="swiper-slide"></div>
//       <div class="swiper-slide"></div>
//       <div class="swiper-slide"></div>
//     </div>
//     <div class="swiper-pagination"></div>
//   </div>
        )
    }
}

export default prizes;