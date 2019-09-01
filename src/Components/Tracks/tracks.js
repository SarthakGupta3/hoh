import React from 'react';

import './tracks.css';
import general from '../../images/general-color.svg';
import ai from '../../images/ai-color.svg';
import blockchain from '../../images/blockchain-color.svg';
import web from '../../images/webapp-color.svg';
import xr from '../../images/vr-color.svg';
import iot from '../../images/iot-color.svg';



class tracks extends React.Component{
    state={
        items:[blockchain, ai, web, xr, iot, general]
    }
    render(){
        return(
            <div id="trackContain">
                
<div id="tracks">
<h1 id="track-heading">TRACKS</h1>
                <div id="margin">
            {this.state.items.map(item => {
                return <div className="track" id={Math.random()}><img className="track-image" src={item} alt=""></img></div>
            })}
               </div>
                
            </div>
            </div>
            
        )
    }
}

export default tracks;