import React from 'react';
import logo from '../../images/hoh.png';
import './splash.css'
class Splash extends React.Component{
    render(){
        return(
            <div className="splash">
                <img src={logo} alt="" className="hoh-logo animated one bounce"></img> 
            </div>
        )
    }
}
export default Splash;