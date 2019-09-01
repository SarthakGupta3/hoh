import React from 'react';

import './background.css';

import bigmountain from '../../images/big_mountain.svg';
import Tree from '../../images/tall_tree.svg';

class Scene extends React.Component{
    render(){
        return(<div className="SceneHolder">
                <img id="bigMountain" src={bigmountain} alt=""></img>
                <img id="mediumMountain" src={bigmountain} alt=""></img>
                <img id="tallTree1" src={Tree} alt=""></img>
                <img id="mediumTree1" src={Tree} alt=""></img>
                <img id="tallTree2" src={Tree} alt=""></img>
                <img id="mediumTree2" src={Tree} alt=""></img>
                <img id="mediumTree3" src={Tree} alt=""></img>
                <div id="stars">

                </div>
                <div id="github">
                    <h2 id="github-text">Github Presents</h2>
                    {/* <div id="logoContain">
                    </div> */}
                        
                </div>
                
        </div>);
    }
}

export default Scene;