import React from 'react';


import './about.css';
import anime from 'animejs';
import Prizes from '../Prizes/prizes';

class About extends React.Component{
    state={
    }
    componentWillMount(){
        let hour = new Date().getHours();
        if(hour >= 20 || hour <=7){
            this.setState({
                background:'about-contain about-background'
            })
        }
        if(hour > 7 || hour <=14){
            this.setState({
                background:'about-contain about-background'
            })
        }
        if(hour >14 || hour <=20){
            this.setState({
                background:'about-contain about-background'
            })
        }
    }
//     componentDidMount(){  
//     var textWrapper = document.querySelector('#heading');
//     textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='heading'>$&</span>");
//     anime.timeline({loop: false})
//   .add({
//     targets: '#heading .heading',
//     scale: [0, 1],
//     duration: 2000,
//     elasticity: 600,
//     delay: (el, i) => 45 * (i+1),
//     direction:'normal'
//         })
//     }
    render(){
        return(
            <div className={this.state.background} id="about">
            <div className="about-sub">
            <h2 id="heading">ABOUT</h2>
            <div className="about">
            <Prizes />
                <div className="hidden">
                <p className="about-text">
                Hack On Hills aims to build an environment of collaborative growth amongst all the participants regardless of their gender, caste, creed, sexual preference, socioeconomic background or cultural belief. Hack On Hills is open to everyone with a crazy idea and a will to implement it into a working prototype.
                </p>
               <p className="about-text">
               Hack On Hills has always been supportive for women participation in the event, we have tried our level best to make sure that female candidates get a fair chance to put-forth their ideas and showcase their experience and talent.
               </p>
                <p className="about-text">
                For this, we have introduced separate prizes for best all women team and reserving some portions of seats for womens during hackathon.
                </p>
                </div>
                
            </div>
            </div>
            </div>
            
        )
    }
}

export default About;