import React, {useState} from 'react';
import {Tabs} from '@tableau/tableau-ui';

export default function LeftBottom(props){
    const [visible, toggleVisible] = useState(true);
    const  [tabs] = useState([{content:<div><h1>SOME DIV</h1></div>,title:"left-bottom"}]);
    const [clicked, setClicked] = useState([<polyline points="18 15 12 9 6 15"></polyline>,
                                            <polyline points="6 9 12 15 18 9"></polyline>]);
    return(
        <div className = {visible ? "topPane" : "topPane"}> 
            <Tabs
                tabs={tabs}
            >
                {tabs[0].content}
            </Tabs> 
            <svg  className ="icon" onClick={()=>toggleVisible(!visible)}
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        {visible?clicked[1]:clicked[0]} 
            </svg>

        </div>    
    )
}