import React from 'react';

import './background-mobile.css';


import mountainDay from '../../images/mountain_day.svg';
import mountainEvening from '../../images/mountain_evening.svg';
import mountainNight from '../../images/mountain_night.svg';
import logo from '../../images/hoh.png';
import Tree from '../../images/tall_tree.svg';
import Navbar from '../Navbar/navbar';


class SceneMobile extends React.Component{
    state={
        mountain:null
    }
    componentWillMount(){
        let hour = new Date().getHours();
        if(hour >= 20 || hour <=6){
            this.setState({
                mountain:mountainNight,
                stars:true,
                background:'nightM SceneHolderM',
                sun:false
            })
        }
        if(hour >6 && hour <=14){
            this.setState({
                mountain:mountainDay,
                stars:false,
                background:'dayM SceneHolderM',
                sun:false
            })
        }
        if(hour >14 && hour <20){
            this.setState({
                mountain:mountainEvening,
                stars:true,
                background:'eveningM SceneHolderM',
                sun:false
            })
        }
    }
    render(){
        return(
                <div className={this.state.background} id="home">
                <Navbar/>
                {/* <img className="bigMountainM" src={this.state.mountain} alt=""></img>
                <img className="mediumMountainM" src={this.state.mountain} alt=""></img> */}
                {/* <img className="mediumMountainM" src={this.state.mountain} alt=""></img> */}
                {/* <img className="tallTree tree1" src={Tree} alt=""></img>
                <img className="tallTree tree2" src={Tree} alt=""></img>
                <img className="tallTree tree3" src={Tree} alt=""></img>
                <img className="tallTree tree4" src={Tree} alt=""></img>
                <img className="tallTree tree5" src={Tree} alt=""></img>
                <img className="tallTree tree6" src={Tree} alt=""></img>
                <img className="tallTree tree7" src={Tree} alt=""></img>
                <img className="tallTree tree8" src={Tree} alt=""></img>
                <img className="tallTree tree9" src={Tree} alt=""></img>
                <img className="tallTree tree11" src={Tree} alt=""></img>
                <img className="tallTree tree12" src={Tree} alt=""></img>
                <img className="tallTree tree13" src={Tree} alt=""></img>
                <img className="tallTree tree14" src={Tree} alt=""></img>
                <img className="tallTree tree15" src={Tree} alt=""></img>
                <img className="tallTree tree16" src={Tree} alt=""></img>
                <img className="tallTree tree17" src={Tree} alt=""></img>
                <img className="tallTree tree18" src={Tree} alt=""></img>
                <img className="tallTree tree19" src={Tree} alt=""></img> */}
                {(this.state.stars) ? <div id="starsM"></div> : null}
                {(this.state.sun) ? <div id="sunM"></div> : null}
                
                <div id="githubM">
                    <h3 className="text-adjustM github-textM animated one fadeInUp slow">HACK ON HILLS</h3>
                    <h5 className="textadjustM animated one fadeIn slow delay-1s">NIT HAMIRPUR</h5>
                    <h6 className="textadjustM animated one fadeIn slow delay-1s">13th - 15th March 2020</h6> 
                </div>

                <div className="Apply">
                    <a href="#devfolio" id="register">Register</a>
                </div>
                {/* <img src={logo} alt="" className="hoh-logoM"></img> */}
        </div>
        );
    }
}

export default SceneMobile;