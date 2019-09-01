import React from 'react';

import image from '../../images/people.jpg';
import './about.css'
class About extends React.Component{
    render(){
        return(
            <div>
            <h2 id="heading">THIS IS HACKONHILLS 5.0</h2>
            <div id="about">
            <img className="Image" src={image} alt=""></img>
                <div>
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
            
        )
    }
}

export default About;