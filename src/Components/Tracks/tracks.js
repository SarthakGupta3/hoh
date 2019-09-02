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
        items:[{item:blockchain, title:'BlockChain'},
        {item:ai, title:'AI'},
        {item:web, title:'Web'},
        {item:xr, title:'AR/VR'},
        {item:iot, title:'Iot'},
        {item:general, title:'General'}]
    }
    render(){
        return(
            <div className="trackContain">
                
<div id="tracks">
<h1 className="track-heading">TRACKS</h1>
                <div className="margin">
            {this.state.items.map(item => {
                return <div className="track" id={Math.random()}><img className="track-image" src={item.item} alt=""></img>
                <div className="track-title">{item.title}</div>
                </div>
            })}
               </div>
                
            </div>
            </div>
            
        )
    }
}

export default tracks;