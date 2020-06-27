import React,{useState} from 'react';
import { Tabs, TabsProps } from '@tableau/tableau-ui';
import LeftTopTabOne from'./tab1';
import LeftTopTabTwo from './tab2';
import LeftBottom from '../left-bottom/left-bottom';

export default function LeftTop(){
    const [selectedTabIndex,setIndex]=useState(0);
    const  [tabs, setTabs] = useState([{content:<LeftTopTabOne/>,title:"tab1"},
                   {content:<LeftTopTabTwo/>,title:"tab2"}]);
    return (
        <div>
            <div className="wrapperLeft"> 
                <Tabs 
                    onTabChange={(index) => {
                    console.log(`onChange: ${index}`);
                        setIndex(index);
                        }}
                    selectedTabIndex={selectedTabIndex}
                    tabs={tabs}
                >
                    <span>{tabs[selectedTabIndex].content}</span>
                </Tabs>
                
            </div >
            
            <LeftBottom/>
        </div>
    )
}
