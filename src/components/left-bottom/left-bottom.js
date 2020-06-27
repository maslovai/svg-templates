import React, {useState} from 'react';
import { Button } from '@tableau/tableau-ui';
export default function LeftBottom(){
    const [visible, toggleVisible] = useState(true);
    return(
        <div>
            <div className = "topPane"> 
                <Button kind='outline' 
                    onClick={()=>toggleVisible(!visible)}
                >
                    Toggle pane
                </Button>
            </div>
            <div className = {visible? "showPane":"hidePane"}> 
                <h1>PARAMETERS</h1>
            </div>
        </div>
    )
}