import React,{useState} from 'react';
import SplitPane from 'react-split-pane';
import { Tabs} from '@tableau/tableau-ui';
import LeftTopTabOne from'./tab1';
import LeftTopTabTwo from './tab2';

export default function Left(){
    const [selectedTabIndex,setIndex]=useState(0);
    const  [tabs1] = useState([{content:<LeftTopTabOne/>,title:"tab1"},
                   {content:<LeftTopTabTwo/>,title:"tab2"}]);
    const [tabs2] = useState([{content:<div><h1>Some div</h1></div>,title:"left-bottom"}]);
    const [visible, toggleVisible] = useState(true);
    const [clicked] = useState([<polyline points="18 15 12 9 6 15"></polyline>,
                                            <polyline points="6 9 12 15 18 9"></polyline>]);
    return (
        <SplitPane split="horizontal" minSize={100} defaultSize={visible?500:700}>
            <div> 
                <Tabs 
                    onTabChange={(index) => {
                    console.log(`onChange: ${index}`);
                        setIndex(index);
                        }}
                    selectedTabIndex={selectedTabIndex}
                    tabs={tabs1}
                >
                    {tabs1[selectedTabIndex].content}
                </Tabs>    
            </div >
            <div className = "topPane"> 
                <Tabs
                    tabs={tabs2}
                >
                    {tabs2[0].content}
                </Tabs> 
                <svg  className ="icon" onClick={()=>toggleVisible(!visible)}
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {visible?clicked[1]:clicked[0]} 
                </svg>
        </div>  
        </SplitPane>
    )
}
