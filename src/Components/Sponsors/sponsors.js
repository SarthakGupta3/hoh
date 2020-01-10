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
import balasmiq from '../../images/balsamiq.png';
import ubidots from '../../images/ubidots.png';


class sponsors extends React.Component{
    state={
        items:[ebizOn,Simba,hasura,metabrainz,gitlab,govtlogo,CodingBlocks,roposo,quikNode,zulip,socialcops,stickwidit,DUAssassins,HelloIntern,ohcampus,producthunt,sketch,creativeTim,bugsee],
        current:[{sponsor:Devfolio,link:'https://devfolio.co'},{sponsor:Matic,link:'https://matic.network'},{sponsor:metabrainz,link:'#'},{sponsor:zulip,link:'#'},{sponsor:bugsee,link:'#'},{sponsor:balasmiq,link:'#'},{sponsor:ubidots,link:'#'},{sponsor:stickermule,link:'http://www.stickermule.com/supports/hackonhills-2019'}]
    }
    componentWillMount(){
        let hour = new Date().getHours();
        if(!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
            if(hour >= 20 || hour <=6){
                this.setState({
                    background:'trackContain sponsorContain sponsor-color-night', 
                    heading:'track-heading sponsor-heading sponsor-heading-night',
                    interested:'interested-heading sponsor-heading-night'
                })
            }
            if(hour >6 && hour <=14){
                this.setState({
                    background:'trackContain sponsorContain sponsor-color-morning',
                    heading:'track-heading sponsor-heading sponsor-heading-morning',
                    interested:'interested-heading sponsor-heading-morning'
                })
            }
            if(hour >14 && hour <20){
                this.setState({
                    background:'trackContain sponsorContain sponsor-color-evening', 
                    heading:'track-heading sponsor-heading sponsor-heading-evening',
                    interested:'interested-heading sponsor-heading-evening'
                })
            }
        }else{
            if(hour >= 20 || hour <=6){
                this.setState({
                    background:'trackContain sponsorContain sponsor-color-nightM', 
                    heading:'track-heading sponsor-heading sponsor-heading-nightM',
                    interested:'interested-heading sponsor-heading-nightM'
                })
            }
            if(hour >6 && hour <=14){
                this.setState({
                    background:'trackContain sponsorContain sponsor-color-morningM',
                    heading:'track-heading sponsor-heading sponsor-heading-morningM',
                    interested:'interested-heading sponsor-heading-morningM'
                })
            }
            if(hour >14 && hour <20){
                this.setState({
                    background:'trackContain sponsorContain sponsor-color-eveningM', 
                    heading:'track-heading sponsor-heading sponsor-heading-eveningM',
                    interested:'interested-heading sponsor-heading-eveningM'
                })
            }
        }
        
    }

    render(){
        return  (
            <div className={this.state.background} id="sponsors">
                
            <div className="tracks hidden">
            {(this.props.type !== 'current') ?  <h1 className={this.state.heading}>PAST SPONSORS</h1> :  <h1 className={this.state.heading}>SPONSORS</h1>} 
                <div className="background-white">
                <h2 id="sponsorHeadContain"><img id="sponsorHead" src={Github} alt=""></img></h2>
                <div className="margin sponsorMargin">

                {/* <div className="sponsor" id={Math.random()}><a className="tempMule" href="https://devfolio.co" alt=""><img className="sponsor-image" src={Devfolio} alt=""></img></a></div>
                <div className="sponsor" id={Math.random()}><a className="tempMule" href="https://matic.network" alt=""><img className="sponsor-image" src={Matic} alt=""></img></a></div> */}

            {(this.props.type!=='current') ? this.state.items.map(item => {
                return <div className="sponsor" id={Math.random()}><img className="sponsor-image" src={item} alt=""></img></div>}) : this.state.current.map(item => {
                return <div className="sponsor" id={Math.random()}><a className="tempMule" href={item.link} alt=""><img className="sponsor-image" src={item.sponsor} alt=""></img></a></div>})}
                {/* <div className="sponsor" id={Math.random()}><a className="tempMule" href="http://www.stickermule.com/supports/hackonhills-2019" alt=""><img className="sponsor-image" src={stickermule} alt=""></img></a></div> */}
                </div>
               </div>
                
            </div>
            {this.props.type === 'current' ? <div>
            <h3 className={this.state.interested}>Interested in being our sponsor?</h3>
           <div className="Sponsor-us">
               <a href="https://hackonhills.typeform.com/to/XLGvG9" target="blank" id="sponsor-us">Sponsor Us</a>
           </div>
       </div> : null}
                {/* <div className="Apply">
                    <a href="#devfolio" id="register">Register</a>
                </div> */}
            </div>
            
        )
    }
}

export default sponsors;