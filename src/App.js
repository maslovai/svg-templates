import React from 'react';
import './App.css';
import Toolbar from './components/toolbar/toolbar';
import LeftTop from './components/left-top/left-top';
import RightTop from './components/right-top/right-top';

function App() {
  return (
    <div className="App">
       <Toolbar/>
       <div className = "wrapper">
          <div className ="left"> <LeftTop/> </div>
          <div className = "right"><RightTop/> </div>
       </div>
    </div>
  );
}

export default App;
