
import React from 'react';

export const ToggleContext = React.createContext();

class ToggleHide extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: 'hide',
            toogleMode: this.toggleMode
        }
    }

    toggleMode = () => this.setState({ mode: this.state.mode === 'hide' ? 'show' : 'hide' })

    render() {
        return (
            <ToggleContext.Provider value={this.state}>
                {this.props.children}
            </ToggleContext.Provider>
        )
    }

}


export default ToggleHide; 