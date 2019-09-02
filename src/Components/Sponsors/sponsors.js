import React from 'react';

// import './tracks.css';
import './sponsors.css';

import Github from '../../images/github_logo.png';
import CodingBlocks from '../../images/Coding_blocks.png';
import Simba from '../../images/simba.png';
import ebizOn from '../../images/ebiz.png';
import sketch from '../../images/sketch.png';
import gitlab from '../../images/gitlab.png';



class sponsors extends React.Component{
    state={
        items:[CodingBlocks,Simba, ebizOn, sketch, gitlab]
    }
    render(){
        return(
            <div className="trackContain">
                
            <div className="tracks">
            <h1 className="track-heading">SPONSORS</h1>
                <div className="background-white">
                <h2 id="sponsorHeadContain"><img id="sponsorHead" src={Github} alt=""></img></h2>
                <div className="margin sponsorMargin">
                {this.state.items.map(item => {
                return <div className="sponsor" id={Math.random()}><img className="sponsor-image" src={item} alt=""></img></div>
            })}
                </div>
           
               </div>
                
            </div>
            </div>
            
        )
    }
}

export default sponsors;