import React from 'react';

import Scene from './Components/Background/background';
import SceneMobile from './Components/Background/background-mobile';
import Tracks from './Components/Tracks/tracks';
import About from './Components/About/about';
import Timeline from './Components/Timeline/timeline';
import Sponsors from './Components/Sponsors/sponsors';
import FAQ from './Components/FAQ/faq';
import Footer from './Components/Footer/footer';
import Info from './Components/Info/info';
import Mountain from './Components/mountains/mountains';


import AOS from 'aos';

class App extends React.Component{


  componentDidMount(){
    AOS.init({
      duration:2000
    });
    let tracks = document.querySelector('.trackContain');
    let track_transit = document.querySelectorAll('.track-transition');
    let scene = document.querySelector('.SceneHolder');
    let range = document.querySelector('.range');
    window.addEventListener('scroll', function(){
      if(!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
        let positionBottomScene = scene.getBoundingClientRect().bottom;
        range.classList.add('animated');
        if(positionBottomScene - window.innerHeight <= -(window.innerHeight/8)){
          // range.style.position = "fixed";
          range.style.visibility = "visible"; 
          range.classList.remove('slideOutDown');
          range.classList.add('slideInUp');
        }else{
          // range.style.position = "absolute";
          range.classList.remove('slideInUp');
          range.classList.add('slideOutDown'); 
          range.classList.add('fast');
          range.style.visibility = 'visible';
          
        }
      }
      
      for(let i=0; i<track_transit.length;i++){
        let positionTopTrack = track_transit[i].getBoundingClientRect().top;
        if(positionTopTrack - window.innerHeight <=-30){
            track_transit[i].classList.add('slide-down');
        }
      }
    //   let positionTopAbout = about.getBoundingClientRect().top;
    //   if(positionTopAbout - window.innerHeight <=-50){
    //     about.style.visibility="visible";
    //       about.classList.add('animated');
    //       about.classList.add('one');
    //       about.classList.add('flipInY');
    //       about.classList.add('fast');
    // }
    tracks.style.visibility="hidden";
    let positionTopTracks = tracks.getBoundingClientRect().top;
    if(positionTopTracks - window.innerHeight <=-40){
        tracks.classList.add('animated');
        tracks.classList.add('one');
        tracks.classList.add('fadeIn');
        tracks.classList.add('fast');
        tracks.style.visibility="visible";
    }

  });
 
   

  }
  
  render(){
    return (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) ? (
      <div className="App">
        <SceneMobile/>
          {/* <About /> */}
          <Tracks/>
          <Timeline/>
          <Sponsors/>
          <FAQ/>   
          <Footer />   
      </div>
    ) : (<div className="App">
       <Scene/>
       <div className="content">
       <Mountain/>
       <Info/>
       {/* <About /> */}
       <Tracks/>
       {/* <Timeline/> */}
       <Sponsors />
       <FAQ/>
       <Footer />
       </div>
      
    </div>);
  }
  
}

export default App;
