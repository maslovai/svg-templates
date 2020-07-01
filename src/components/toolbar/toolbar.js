import React, {useState} from 'react';
import { Button, DropdownSelect } from '@tableau/tableau-ui';
export default function Toolbar(){
    // const [value, setValue] = useState('');
    return (
        <div className="wrapperTools">
            <div className="tools">
                <Button kind='outline'>RUN</Button>
            </div>
            <div className="tools">
                <DropdownSelect label='Label' kind='outline' >
                {/* onChange={e => setValue(e.target.value)} */}
                    <option>alpha</option>
                    <option>beta</option>
                    <option>charlie</option>
                    <option>delta</option>
                </DropdownSelect>
            </div>
           
        </div>
    )
}