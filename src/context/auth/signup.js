import React from 'react';
import { AuthContext } from './context';
import Show from '../../components/show/show';

class SignUp extends React.Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
            role: ''
         }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("in handleSubmit")
        this.context.signUp(this.state.username, this.state.password , this.state.role);
    }


    render() { 
        console.log('*****', this.context);
        return (
            <>
            <Show condition={!this.context.loggedIn}>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange} placeholder="username" name="username" />
                        <input onChange={this.handleChange} placeholder="password" name="password" type="password" />
                        <input onChange={this.handleChange} placeholder="role" name="role" />

                        <button type="submit">signup</button>
                    </form>
                </Show>
            </>
          );
    }
}
 
export default SignUp;