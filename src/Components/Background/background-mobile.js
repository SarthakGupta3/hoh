import React from 'react';

import './background-mobile.css';

import bigmountain from '../../images/big_mountain.svg';
import Tree from '../../images/tall_tree.svg';

class SceneMobile extends React.Component{
    render(){
        return(<div className="SceneHolderM">
                <img id="bigMountainM" src={bigmountain} alt=""></img>
                <img id="mediumMountainM" src={bigmountain} alt=""></img>
                <img id="tallTree1M" src={Tree} alt=""></img>
                <img id="mediumTree1M" src={Tree} alt=""></img>
                <img id="tallTree2M" src={Tree} alt=""></img>
                <img id="mediumTree2M" src={Tree} alt=""></img>
                <div id="starsM"></div>
                <div id="githubM">
                    <h3 id="github-textM">Github Presents</h3>
                    {/* <div id="logoContainM">
                    </div> */}
                </div>
                
        </div>);
    }
}

export default SceneMobile;