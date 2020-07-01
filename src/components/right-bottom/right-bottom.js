import React,{useState} from 'react';
import { Button} from '@tableau/tableau-ui';
import Errors from './errors';

export default function RightBottom(){
    const [visible, toggleVisible] = useState(true);
    return (
        <div>
            <div className="errorsTopDiv"> 

                <div className = {visible ? "topPane" : "topPaneMoved"}>
                    <div>ERRORS</div>
                    <Button onClick={()=>toggleVisible(!visible)}>Toggle Pane</Button>
                </div>
                <div className = {visible? "showPane ":"hidePane"}>
                    <Errors/>
                </div>
            </div>
        </div>
    )
}