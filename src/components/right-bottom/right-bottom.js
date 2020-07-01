import React,{useState} from 'react';
// import { Button} from '@tableau/tableau-ui';
import { Tabs} from '@tableau/tableau-ui';
import Errors from './errors';
// import FontAwesome from 'react-fontawesome'

export default function RightBottom(){
    const [visible, toggleVisible] = useState(true);
    const  [tabs] = useState([{content:<Errors/>,title:"errors"}]);
                   
    return (
        <div className = {visible ? "topPane" : "topPaneMoved"}>
            <Tabs
                tabs={tabs}
            >
                {tabs[0].content}
            </Tabs> 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                {/* <Button onClick={()=>toggleVisible(!visible)}></Button> */}
           
        </div>
    )
}