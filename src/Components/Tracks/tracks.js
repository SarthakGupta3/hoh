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
            <div className={this.state.background} id="tracks">
                    <div className="tracks">
            <h1 className={this.state.heading}>TRACKS</h1>
                <div className="margin hidden">
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