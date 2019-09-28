import React from 'react';

import './mountain.css';
import mountain from '../../images/mountain_night.svg';
class Mountains extends React.Component{
    componentWillMount(){
        let hour = new Date().getHours();
        if(hour >= 20 || hour <=6){
            this.setState({
                background:'range-contain range-contain-night'
            })
        }
        if(hour >6 && hour <=14){
            this.setState({
                background:'range-contain range-contain-day'
            })
        }
        if(hour >14 && hour <20){
            this.setState({
                background:'range-contain range-contain-evening'
            })
    }
    }
    render(){
        return(
            <div className="range animated one slideOutDown">
             <div className={this.state.background}>

             </div>
               {/* <img src={mountain} alt="" className="test"></img> */}
            </div>
        )
    }
}

export default Mountains;