import React from 'react';

import '../Tracks/tracks.css';
import './sponsors.css';

import Github from '../../images/github_logo.png';
import ebizOn from '../../images/ebiz.png';
import Devfolio from '../../images/devfolio.png';
import Simba from '../../images/simba.png';
import quikNode from '../../images/QuikNode.png';
import Matic from '../../images/Matic_Logo.png';
import metabrainz from '../../images/meta.png';
import gitlab from '../../images/gitlab.png';
import govtlogo from '../../images/govt_logo.png';
import CodingBlocks from '../../images/Coding_blocks.png';
import zulip from '../../images/zulip-logo.png';
import hasura from '../../images/hasura.png';
import roposo from '../../images/roposo.png';
import socialcops from '../../images/socialcops.png';
import stickermule from '../../images/stickermule.png';
import stickwidit from '../../images/stickwidit.png';
import DUAssassins from '../../images/duAssassins.jpg';
import HelloIntern from '../../images/hellointern.png';
import ohcampus from '../../images/ohcampus.png';
import producthunt from '../../images/product-hunt.png';
import sketch from '../../images/sketch.png';
import creativeTim from '../../images/creativeTim.png';
import bugsee from '../../images/bugsee.png';


class sponsors extends React.Component{
    state={
        items:[ebizOn,Devfolio,Simba,hasura,Matic,metabrainz,gitlab,govtlogo,CodingBlocks,roposo,quikNode,zulip,socialcops,stickermule,stickwidit,DUAssassins,HelloIntern,ohcampus,producthunt,sketch,creativeTim,bugsee]
    }
    componentWillMount(){
        let hour = new Date().getHours();
        if(!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
            if(hour >= 20 || hour <=6){
                this.setState({
                    background:'trackContain  sponsor-color-night', 
                    heading:'track-heading sponsor-heading sponsor-heading-night'
                })
            }
            if(hour >6 && hour <=14){
                this.setState({
                    background:'trackContain  sponsor-color-morning',
                    heading:'track-heading sponsor-heading sponsor-heading-morning'
                })
            }
            if(hour >14 && hour <20){
                this.setState({
                    background:'trackContain sponsor-color-evening', 
                    heading:'track-heading sponsor-heading sponsor-heading-evening'
                })
            }
        }else{
            if(hour >= 20 || hour <=6){
                this.setState({
                    background:'trackContain sponsorContain sponsor-color-nightM', 
                    heading:'track-heading sponsor-heading sponsor-heading-nightM'
                })
            }
            if(hour >6 && hour <=14){
                this.setState({
                    background:'trackContain sponsorContain sponsor-color-morningM',
                    heading:'track-heading sponsor-heading sponsor-heading-morningM'
                })
            }
            if(hour >14 && hour <20){
                this.setState({
                    background:'trackContain sponsorContain sponsor-color-eveningM', 
                    heading:'track-heading sponsor-heading sponsor-heading-eveningM'
                })
            }
        }
        
    }

    render(){
        return(
            <div className={this.state.background} id="sponsors">
                
            <div className="tracks hidden">
            <h1 className={this.state.heading}>PAST SPONSORS</h1>
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