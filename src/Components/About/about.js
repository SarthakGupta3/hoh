import React from 'react';


import './about.css';
import Swiper from 'swiper';
import anime from 'animejs';
import Prizes from '../Prizes/prizes';
import img1 from '../../images/1.jpg';
import img2 from '../../images/2.jpg';
import img3 from '../../images/3.jpg';
import img6 from '../../images/6.jpg';
import img7 from '../../images/7.jpg';
import img9 from '../../images/9.jpg';
import diversity from '../../images/diversity.jpg';
class About extends React.Component{
    state={
        images:[img2,img1,img6,img7,img3]
    }
    componentDidMount(){
        new Swiper('.swiper-container', {
            effect: 'fade',
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
              },
            pagination: {
              el: '.swiper-pagination',
            },
          });
    }

    render(){
        return  (
            <div id="about-info" className="info-section">
                <div className="about-row-1">
             <div id="about">
                 <div className="about-contain about-background swiper-container">
                <div className="swiper-wrapper">
                {this.state.images.map(image => {
                    return(
                        <div className="swiper-slide about-image">
                        <img src={image} alt="" className="image-fit"></img>
                    </div>
                    )
                })}    
                </div>
            </div>
            
            </div>
             <div className="about-content">
             <h1 className="about-heading">ABOUT</h1>
             <p className="about-data">
           
             Hack on hills is a student run annual hackathon which provides a platform for brilliant minds to learn, code, build and design together to address real world problems. It does not matter whether you are a beginner or a professional programmer there is a lot to learn.
            
             </p>
             <p className="about-data">
             It provides an opportunity to all the coders, developers and hackers to showcase their inventiveness through technology. It brings together talented performance and recruiters, data scientists, engineers, developers and field experts.
             </p>
                
             </div>


            </div>
                <div className="about-row-2">
                <div className="about-content-diversity">
             <h1 className="about-heading">DIVERSITY</h1>
             <p className="about-data">
            
             Steps had been taken to make this event more inclusive towards female participants. To encourage this, every year a special diversity prize is awarded to all female team. Moreover, some percentage of seats are reserved for females. In the last iteration, an overwhelming participation of 45+ females has been observed with 3 diversity teams.
             
             </p>
             </div>
             <div className="diversity-image">
                        <img src={diversity} alt="" className="image-fit"></img>
                    </div>
                </div>
          
            </div>
            
        ) 
    }
}

export default About;