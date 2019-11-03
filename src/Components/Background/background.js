import React from 'react';

import './background.css';

import mountainDay from '../../images/mountain_day.svg';
import mountainEvening from '../../images/mountain_evening.svg';
import mountainNight from '../../images/mountain_night.svg';
import Tree from '../../images/tall_tree.svg';
import Navbar from '../Navbar/navbar';
import logo from '../../images/hoh.png';

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
                sun:false
            })
        }
        if(hour >6 && hour <=14){
            this.setState({
                mountain:mountainDay,
                stars:false,
                background:'day SceneHolder',
                sun:false
            })
        }
        if(hour >14 && hour <20){
            this.setState({
                mountain:mountainEvening,
                stars:true,
                background:'evening SceneHolder',
                sun:false
            })
    }
    }
    render(){
        return(
        <div className={this.state.background}>
                <Navbar/>
                {/* <img id="bigMountain" src={this.state.mountain} alt=""></img>
                <img id="mediumMountain" src={this.state.mountain} alt=""></img>
                <img id="tallTree1" src={Tree} alt=""></img>
                <img id="mediumTree1" src={Tree} alt=""></img>
                <img id="tallTree2" src={Tree} alt=""></img>
                <img id="mediumTree2" src={Tree} alt=""></img>
                <img id="mediumTree3" src={Tree} alt=""></img>   */}
                {(this.state.stars) ? <div id="stars"></div> : null}
                {(this.state.sun) ? <div id="sun"></div> : null}
                <div id="github">
                    <h3 className="text-adjust github-text animated one fadeInUp slow">HACK ON HILLS</h3>
                    <h5 className="textadjust animated one fadeIn slow delay-1s">NIT HAMIRPUR</h5>
                    <h6 className="textadjust animated one fadeIn slow delay-1s">13th - 15th March 2020</h6> 
                </div>

                <div className="Apply">
                    <a href="#devfolio" id="register">Register</a>
                </div>
                {/* <img src={logo} alt="" className="hoh-logo"></img> */}
        </div>);
    }
}

export default Scene;