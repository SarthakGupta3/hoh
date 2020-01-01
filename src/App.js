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
import Splash from './Components/Splash/splash';
import AboutM from './Components/About-mobile/about-mobile';
import ScheduleDesktop from './Components/Schedule_Desktop/schedule';


import AOS from 'aos';

class App extends React.Component{


  componentDidMount(){
    AOS.init({
      duration:2000
    });
    let tracks = document.querySelector('.trackContain');
    let track_transit = document.querySelectorAll('.track-transition');
    let scene = document.querySelector('.SceneHolder');
    // let range = document.querySelector('.range');
    window.addEventListener('scroll', function(){
      
      for(let i=0; i<track_transit.length;i++){
        let positionTopTrack = track_transit[i].getBoundingClientRect().top;
        if(positionTopTrack - window.innerHeight <=-30){
            track_transit[i].classList.add('slide-down');
        }
      }
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
        <AboutM/>
          <Tracks/>
          <Timeline/>
          <Sponsors type={'current'}/>
          <Sponsors/>
          <FAQ/>   
          <Footer />   
      </div>
    ) : (<div className="App desktop">
       <Scene/>
       <div className="gradients">
        {/* <div className="gradient1"></div>
        <div className="gradient2"></div>
        <div className="gradient3"></div>
        <div className="gradient4"></div> */}
       </div>
       
       <div className="content">
          <About/>
          <Tracks/>
          <ScheduleDesktop/>
          <Sponsors type={'current'}/>
          <Sponsors />
          <FAQ/>
          <Footer />
       </div>
      
    </div>);
  }
  
}

export default App;
