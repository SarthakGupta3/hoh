import React from 'react';

import './tracks.css';
import general from '../../images/general.png';
import ai from '../../images/ai.png';
import blockchain from '../../images/blockchain.png';
import web from '../../images/web.png';
import xr from '../../images/vr.png';
import iot from '../../images/IOT.png';


class tracks extends React.Component{
    state={
        items:[{item:blockchain, title:'BlockChain'},
        {item:ai, title:'AI'},
        {item:web, title:'Web'},
        {item:xr, title:'AR/VR'},
        {item:iot, title:'IOT'},
        {item:general, title:'General'}]
    }
    componentWillMount(){
        let hour = new Date().getHours();
        if(hour >= 20 || hour <=6){
            this.setState({
                background:'trackContain contain color-night',
                heading:'track-heading heading-night'
            })
            document.body.classList.add('body-night');
        }
        if(hour >6 && hour <=14){
            this.setState({
                background:'trackContain contain color-morning',
                heading:'track-heading heading-morning'
            })
            if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
                document.body.classList.add('body-morningM');
            }else{
                document.body.classList.add('body-morning');
            }
            
        }
        if(hour >14 && hour <20){
            this.setState({
                background:'trackContain contain color-evening',
                heading:'track-heading heading-evening'
            })
            document.body.classList.add('body-evening');
        }     
    }
    render(){
        return(
            <div className={this.state.background} id="tracks" data-aos="zoom-in" data-aos-duration="600">
                    <div className="tracks">
            <h1 className={this.state.heading}>TRACKS</h1>
                <div className="margin hidden">
            {this.state.items.map(item => {
                return <div className="track track-transition hideme" id={Math.random()}><img className="track-image" src={item.item} alt=""></img>
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