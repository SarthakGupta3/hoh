import React from 'react';

import Scene from './Components/Background/background';
import SceneMobile from './Components/Background/background-mobile';
import Tracks from './Components/Tracks/tracks';
import About from './Components/About/about';
import Timeline from './Components/Timeline/timeline';

function App() {
  return (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) ? (
    <div className="App">
      <SceneMobile />
      <About />
      <Tracks />
      <Timeline />
      <Tracks />
    </div>
  ) : (<div className="App">
    <Scene />
    <About />
    <Tracks/>
    <Timeline />
    <Tracks />
  </div>);
}

export default App;
