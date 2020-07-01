import React,{useState} from 'react';
import SplitPane from 'react-split-pane';
import { Tabs} from '@tableau/tableau-ui';
import RightTopTabOne from'./tab1';
import RightTopTabTwo from './tab2';
import RightBottom from '../right-bottom/right-bottom';


export default function RightTop(){
    const [selectedTabIndex,setIndex]=useState(0);
    const  [tabs, setTabs] = useState([{content:<RightTopTabOne/>,title:"tab1"},
                   {content:<RightTopTabTwo/>,title:"tab2"}]);
    return (
        <SplitPane split="horizontal" minSize={100} defaultSize={500}>
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
            <RightBottom header='RIGHT_BOTTOM' />
        </SplitPane>
    )
}