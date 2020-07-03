import React,{useState} from 'react';
import SplitPane from 'react-split-pane';
import {Tabs} from '@tableau/tableau-ui';
import RightTopTabOne from'./tab1';
import RightTopTabTwo from './tab2';
import Errors from '../right-bottom/errors';

export default function Right(){
    const [selectedTabIndex,setIndex]=useState(0);
    const  [tabs] = useState([{content:<RightTopTabOne/>,title:"tab1"},
                   {content:<RightTopTabTwo/>,title:"tab2"}]);
    const [visible, toggleVisible] = useState(true);
    const  [tabs2] = useState([{content:<Errors/>,title:"errors"}]);
    const [clicked, setClicked] = useState([<polyline points="18 15 12 9 6 15"></polyline>,
                                            <polyline points="6 9 12 15 18 9"></polyline>]);
    return (
        <SplitPane split="horizontal" minSize={100} defaultSize={visible?500:650}>
            <div> 
                <Tabs 
                    onTabChange={(index) => {
                    console.log(`onChange: ${index}`);
                        setIndex(index);
                        }}
                    selectedTabIndex={selectedTabIndex}
                    tabs={tabs}
                >
                    {tabs[selectedTabIndex].content}
                </Tabs>  
            </div>
            <div className = {visible ? "topPane" : "topPane"}> 
                <Tabs
                    tabs={tabs2}
                >
                    {tabs2[0].content}
                </Tabs> 
                <svg  className ="icon" onClick={()=>toggleVisible(!visible)}
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    {visible?clicked[1]:clicked[0]} 
                </svg>
            </div>   
        </SplitPane>
    )
}