import React from 'react';
import Prizes from '../../Components/Prizes/prizes';
import diversity from '../../images/diversity.jpg';
import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';
import image6 from '../../images/6.jpg';
import image7 from '../../images/7.jpg';
import Swiper from 'swiper';
class aboutM extends React.Component{
    state={
        items:[{item:image1},
        {item:image2}, 
        {item:image3}, 
        {item:image6},
        {item:image7}]
    }
    componentDidMount(){
        new Swiper('.swiper-container2', {
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
        return(
            <div className="about-mobile">
            <h1 className="about-heading">ABOUT</h1>
                <Prizes/>   
                <div>
                <p className="about-data about-dataM">
             Hack on hills is a student run annual hackathon which provides a platform for brilliant minds to learn, code, build and design together to address real world problems. It does not matter whether you are a beginner or a professional programmer there is a lot to learn.
             </p>
             <p className="about-data about-dataM">
             It provides an opportunity to all the coders, developers and hackers to showcase their inventiveness through technology. It brings together talented performance and recruiters, data scientists, engineers, developers and field experts.
             </p>
                </div> 
                <h1 className="about-heading">DIVERSITY</h1>
                <div className="mobile-diversity-contain">
                <img src={diversity} alt="" className="diversity-mobile"></img>
                </div>
                <p className="about-data about-dataM">
             It provides an opportunity to all the coders, developers and hackers to showcase their inventiveness through technology. It brings together talented performance and recruiters, data scientists, engineers, developers and field experts.
             </p>
            </div>
        )
    }
}

export default aboutM;