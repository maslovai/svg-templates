import React,{useState} from 'react';
import { Tabs, TabsProps } from '@tableau/tableau-ui';
import RightTopTabOne from'./tab1';
import RightTopTabTwo from './tab2';

export default function RightTop(){
    const [selectedTabIndex,setIndex]=useState(0);
    const  [tabs, setTabs] = useState([{content:<RightTopTabOne/>,title:"tab1"},
                   {content:<RightTopTabTwo/>,title:"tab2"}]);
    return (
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
        </div>
    )
}