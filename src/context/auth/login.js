/* eslint-disable no-unused-vars */

import React from 'react';
import { AuthContext } from './context';
import Show from '../../components/show/show';

class Login extends React.Component {

    static contextType = AuthContext;
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("in handleSubmit")
        this.context.login(this.state.username, this.state.password);
    }

    render() {
        return (
            <>
                <Show condition={this.context.loggedIn}>
                    <button onClick={this.context.logout}>Logout</button>
                </Show>
                <Show condition={!this.context.loggedIn}>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} placeholder="username" name="username" />
                        <input onChange={this.handleChange} placeholder="password" name="password" />
                        <button type="submit">Login</button>
                    </form>
                </Show>
            </>
        )
    }

}

export default Login;