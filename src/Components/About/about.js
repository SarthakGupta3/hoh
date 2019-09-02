import React from 'react';

import image from '../../images/1.jpg';
import './about.css';
import * as THREE from "three";
import image1 from '../../images/1.jpg';
import mapleLeaf from '../../images/maple-leaf.svg'
class About extends React.Component{
    componentDidMount(){
        let output = document.querySelector('.Image');
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 30, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(output.offsetWidth, output.offsetHeight);
        renderer.setClearColor( 0xffffff, 1);
        renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
        output.append( renderer.domElement );
        var geometry = new THREE.BoxGeometry( 0.90, 0.90, 0.90 );
        var material = new THREE.MeshFaceMaterial( [
            new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( image1 ) } ),
            new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( image1 ) } ),
            new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( image1 ) } ),
            new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( image1 ) } ),
            new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( image1 ) } ),
            new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( image1 ) } )
        ]);
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        camera.position.z = 3;
        var animate = function () {
        requestAnimationFrame( animate );
        // cube.rotation.x += 0.003;
        cube.rotation.y += 0.003;
        renderer.render( scene, camera );
        };
    animate();
    }
    render(){
        return(
            <div className="about-contain">
            <img src={mapleLeaf} className="leaf1" alt=""></img>
            <img src={mapleLeaf} className="leaf2" alt=""></img>
            <img src={mapleLeaf} className="leaf3" alt=""></img>
            <img src={mapleLeaf} className="leaf4" alt=""></img>
            <div className="about-sub">
            
            <h2 id="heading">THIS IS HACKONHILLS 5.0</h2>
            <div id="about">
            {(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) ? <div className="Image"></div> : <img className="ImageW Image" src={image} alt=""></img> }
            
            
                <div>
                <p className="about-text">
                Hack On Hills aims to build an environment of collaborative growth amongst all the participants regardless of their gender, caste, creed, sexual preference, socioeconomic background or cultural belief. Hack On Hills is open to everyone with a crazy idea and a will to implement it into a working prototype.
                </p>
               <p className="about-text">
               Hack On Hills has always been supportive for women participation in the event, we have tried our level best to make sure that female candidates get a fair chance to put-forth their ideas and showcase their experience and talent.
               </p>
                <p className="about-text">
                For this, we have introduced separate prizes for best all women team and reserving some portions of seats for womens during hackathon.
                </p>
                </div>
                
            </div>
            </div>
            </div>
            
        )
    }
}

export default About;