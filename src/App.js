import React from 'react';
import './App.css';
import Toolbar from './components/toolbar/toolbar';
import Left from './components/left/left';
import Right from './components/right/right';
import SplitPane from 'react-split-pane';

function App() {
  return (
    <div className="App">
       <Toolbar/>
       <SplitPane split="vertical" minSize={200} defaultSize={800}>
           <Left/>
           <Right/> 
       </SplitPane>
    </div>
  );
}

export default App;
