import React from 'react';

import { ToggleContext } from '../../settings/HideShow';
import { Button } from 'react-bootstrap';

class ToggleContent extends React.Component {

    static contextType = ToggleContext;


    render() {
        return(
            <>
        <Button  variant="danger" className="removeBtn" style={{ width: "6em", position: 'relative', left: "40em", top: "0.5em" }} onClick={this.context.toogleMode}>{this.context.mode}</Button>{' '}
    
            </>
        )
    }
}

export default ToggleContent;
