import React, {useState} from 'react';
import { Button } from '@tableau/tableau-ui';
export default function LeftBottom(props){
    const [visible, toggleVisible] = useState(true);
    // const [clicked, setClicked] = useState('Hide Pane')
    return(
        <div>
            <div className = {visible ? "topPane" : "topPaneMoved"}> 
                <div className='buttonDiv'>
                    <Button kind='outline' 
                        onClick={()=>toggleVisible(!visible)}
                    >
                    Toggle Pane
                    </Button>
                </div>
            </div>
            <div className = {visible? "showPane ":"hidePane w3-animate-bottom"}> 
                <h1>{props.header}</h1>
            </div>
        </div>
    )
}