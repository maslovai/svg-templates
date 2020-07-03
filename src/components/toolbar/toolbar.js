import React, {useState} from 'react';
import { Button, DropdownSelect } from '@tableau/tableau-ui';
export default function Toolbar(){
    // const [value, setValue] = useState('');
    return (
        <div className="wrapperTools">
            <span className="tools">
                <Button kind='outline'>RUN</Button>
            </span>
            <span className="tools">
                <DropdownSelect  >
                {/* onChange={e => setValue(e.target.value)} */}
                    <option>alpha</option>
                    <option>beta</option>
                    <option>charlie</option>
                    <option>delta</option>
                </DropdownSelect>
            </span>
           
        </div>
    )
}