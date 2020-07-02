import React, {useState} from 'react';
import { Button } from '@tableau/tableau-ui';
import {Tabs} from '@tableau/tableau-ui';

export default function LeftBottom(props){
    const [visible, toggleVisible] = useState(true);
    const  [tabs] = useState([{content:<div><h1>SOME DIV</h1></div>,title:"errors"}]);
    // const [clicked, setClicked] = useState('Hide Pane')
    return(
        <div>
            <div className = {visible ? "topPane" : "topPaneMoved"}> 
            <Tabs
                tabs={tabs}
            >
                {tabs[0].content}
            </Tabs> 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
            
        </div>
    )
}