import React from 'react';

import Scene from './Components/Background/background';
import SceneMobile from './Components/Background/background-mobile';
import Tracks from './Components/Tracks/tracks';
import About from './Components/About/about';
import Timeline from './Components/Timeline/timeline';
import Sponsors from './Components/Sponsors/sponsors';


class App extends React.Component{
  componentDidMount(){
    let tracks = document.querySelector('.trackContain');
    let about = document.querySelector('.about');
    about.style.visibility = "hidden";  
    window.addEventListener('scroll', function(){
      let positionTopAbout = about.getBoundingClientRect().top;
      if(positionTopAbout - window.innerHeight <=-50){
        about.style.visibility="visible";
          about.classList.add('animated');
          about.classList.add('one');
          about.classList.add('flipInY');
          about.classList.add('fast');
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
        <About />
        <Tracks/>
        <Timeline/>
        <Sponsors/>
      </div>
    ) : (<div className="App">
       <Scene/>
       <About />
       <Tracks/>
       <Timeline/>
       <Sponsors />
    </div>);
  }
  
}

export default App;
