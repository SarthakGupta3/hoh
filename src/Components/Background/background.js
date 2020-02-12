import React from 'react';

import './background.css';

import mountainDay from '../../images/mountain_day.svg';
import mountainEvening from '../../images/mountain_evening.svg';
import mountainNight from '../../images/mountain_night.svg';
import Navbar from '../Navbar/navbar';

class Scene extends React.Component{
    state={
        mountain:null
    }

    componentWillMount(){
        let hour = new Date().getHours();
        if(hour >= 20 || hour <=6){
            this.setState({
                mountain:mountainNight,
                stars:true,
                background:'night SceneHolder',
                sun:false,
                LocationColor:'fas fa-map-marker-alt white',
                timeIcon:'fas fa-calendar-alt white'
            })
        }
        if(hour >6 && hour <=14){
            this.setState({
                mountain:mountainDay,
                stars:false,
                background:'day SceneHolder',
                sun:false,
                LocationColor:'fas fa-map-marker-alt black',
                timeIcon:'fas fa-calendar-alt black'
            })
        }
        if(hour >14 && hour <20){
            this.setState({
                mountain:mountainEvening,
                stars:true,
                background:'evening SceneHolder',
                sun:false,
                LocationColor:'fas fa-map-marker-alt black',
                timeIcon:'fas fa-calendar-alt black'
            })
    }
    }
    render(){
        return(
        <div className={this.state.background}>
                <Navbar/>
                {(this.state.stars) ? <div id="stars"></div> : null}
                {(this.state.sun) ? <div id="sun"></div> : null}
                <div id="github">
                    <h3 className="text-adjust github-text animated one fadeInUp slow">HACK ON HILLS</h3>
                    <h5 className="textadjust animated one fadeIn slow delay-1s"><i class={this.state.LocationColor}></i>NIT HAMIRPUR</h5>
                    <h6 className="textadjust animated one fadeIn slow delay-1s"><i class={this.state.timeIcon}></i>3rd - 5th April 2020</h6> 
                </div>

                <div className="Apply">
                <button id="devfolio-apply-now"><svg class="logo" xmlns="http://www.w3.org/2000/svg" fill="#fff"viewBox="0 0 115.46 123.46" style={{height:24+'px',width:24+'px',marginRight:8+'px'}}><path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z" /><path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z"/></svg>Apply with Devfolio</button>
                </div>
                {/* <img src={logo} alt="" className="hoh-logo"></img> */}
        </div>);
    }
}

export default Scene;