/* eslint-disable no-unused-vars */

import React from 'react';
import base64 from 'base-64';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

export const AuthContext = React.createContext();

const API = "https://todo-api-laith.herokuapp.com/api/v1/users";

// username : >> laith1
// password : >> 123
// role >> admin

class AuthProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            login: this.login,
            signUp: this.signUp,
            logout: this.logout,
            user: {},
            isValidAction: this.isValidAction
        }

    }

    isValidAction = (action) => {
        const actions = {
            admin: ['edit', 'delete', 'read'],
            user: ['read'],
            editor: ['edit', 'read']
        };

        const role = this.state.user.user.role;
        console.log("role : ", role)
        console.log("actions[role].includes(action): ", actions[role].includes(action))
        return actions[role].includes(action)

    }

    login = async (username, password) => {
        try {
 
            const encodedData = base64.encode(`${username}:${password}`);
            const result = await fetch(`${API}/signin`, {
                method: 'post',
                mode: 'cors',
                cache: 'no-cache',
                headers: { 'Authorization': `Basic ${encodedData}`  }
            });
            let res = await result.json();
            // console.log("res: ", res)
            var token = res.token ; 
            localStorage.setItem("token", token);
            this.validateToken(res.token);

        } catch (e) {
            console.log("error : ", e)
        }
    }

    signUp = async (username, password, role) => {
        try {

            const result = await fetch(`${API}/signup`, {
                method: 'post',
                mode: 'cors',
                cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password, role })
            })
            let res = await result.json();
            // console.log("res: ", res)
            this.validateToken(res.token);

        } catch (e) {
            console.log("error : ", e)
        }
    }



    validateToken = (token) => {
        // console.log("token >>> ", token)
        let user = jwt.decode(token)

        if (user) {
            this.setAuthState(true, token, user)  // to set cookie and update state.
        }
    }

    setAuthState = (loggedIn, token, user) => {
        cookie.save('auth', token);  // save token as a cookie in browser
        //update conext with user object 
        this.setState({ loggedIn, user })
    }

    logout = () => {
        // console.log('click');
        this.setAuthState(false, null, {});
    }


    componentDidMount() {
        console.log('in did mount >>>>');
        // get the cookie -> validate cookie -> of valid -> update the state 
        const cookieToken = cookie.load('auth');
        const token = cookieToken || null;
        this.validateToken(token);
    }

    render() {
        console.log('this. state', this.state);
        return (
            <AuthContext.Provider value={this.state}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }

}

export default AuthProvider;