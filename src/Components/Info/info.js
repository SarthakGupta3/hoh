import React from 'react';

import './info.css';
import image from '../../images/1.jpg';

class Info extends React.Component{
    render(){
        return(
            <div className="info" id="about">
                <div className="info-item" data-aos="fade-left">
                    <img src={image} alt="" className="image-adjust"></img>
                    <div className="text">
                        <p>Hye theredao;jdop;i hioaphf  hfiaopfhiewa hafif gupiw fp </p>
                    </div>
                </div>
                <div className="info-item" data-aos="fade-right">
                <div className="text">
                        <p>Hye theredao;jdop;i hioaphf  hfiaopfhiewa hafif gupiw fp </p>
                    </div>
                    <img src={image} alt="" className="image-adjust"></img>
                </div>
                <div className="info-item" data-aos="fade-left">
                    <img src={image} alt="" className="image-adjust"></img>
                    <div className="text">
                        <p>Hye theredao;jdop;i hioaphf  hfiaopfhiewa hafif gupiw fp </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info;