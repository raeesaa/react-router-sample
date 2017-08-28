import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loggedInUser: null,
            isUserLoggedIn: false
        }
    }

    loginHandler = (loginCredentials) => {
        console.log("In login handler", loginCredentials);

        //Check if username exists
        let user = this.state.users.filter((value) => {
            return value.username === loginCredentials.username
        })[0];

        if (user) {
            //Match password
            if (user.password === loginCredentials.password) {

                let loggedInUser = {
                    username: user.username
                };

                this.setState({
                    isUserLoggedIn: true,
                    loggedInUser: loggedInUser
                });
                return true;
            }
        } else {
            return false;
        }
    }

    registerHandler = (registrationDetails) => {
        this.setState({
            users: this.state.users.concat(registrationDetails)
        });
    }

    handlePasswordChange = (newPassword) => {

        let users = this.state.users.slice();
        for (var i = 0; i < users.length; i++) {
            if (users[i].username === this.state.loggedInUser.username) {
                users[i].password = newPassword;
                break;
            }
        }

        this.setState({
            users: users
        });

        return true;
    }

    logoutHandler = () => {
        console.log("In application logout handler");
        this.setState({
            loggedInUser: null,
            isUserLoggedIn: false
        });
        
        return;
    }

    render() {

        let applicationState = {
            loggedInUser: this.state.loggedInUser,
            isUserLoggedIn: this.state.isUserLoggedIn
        }

        return (<Router>
            <div>
                <Route exact path="/" render={(props) => { return <Login {...props} loginHandler={this.loginHandler} /> }}></Route>
                <Route exact path="/register" render={(props) => { return <Register {...props} registerHandler={this.registerHandler} /> }}></Route>
                <Route path="/home" render={(props) => { return <Home {...props} handlePasswordChange={this.handlePasswordChange} logoutHandler={this.logoutHandler} applicationState={applicationState} /> }}></Route>
            </div>
        </Router>);
    }
}

export default App;
