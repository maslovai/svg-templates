import React,{useState} from 'react';
import SplitPane from 'react-split-pane';
import { Tabs} from '@tableau/tableau-ui';
import LeftTopTabOne from'./tab1';
import LeftTopTabTwo from './tab2';
import LeftBottom from '../left-bottom/left-bottom';

export default function Left(){
    const [selectedTabIndex,setIndex]=useState(0);
    const  [tabs] = useState([{content:<LeftTopTabOne/>,title:"tab1"},
                   {content:<LeftTopTabTwo/>,title:"tab2"}]);
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
                
            </div >

            <LeftBottom header='LEFT_BOTTOM'/>
        </SplitPane>
    )
}
