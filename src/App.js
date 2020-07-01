import React from 'react';
import './App.css';
import Toolbar from './components/toolbar/toolbar';
import LeftTop from './components/left-top/left-top';
import RightTop from './components/right-top/right-top';
import SplitPane from 'react-split-pane';

function App() {
  return (
    <div className="App">
       <Toolbar/>
       <SplitPane split="vertical" minSize={200} defaultSize={800}>
           <LeftTop/>
           <RightTop/> 
       </SplitPane>
    </div>
  );
}

export default App;
