import React from "react";

import AppNavbar from './Navbar';
import { Route } from 'react-router-dom';

import Cards from './cards/Cards';
import UpdatePassword from './UpdatePassword';

function HomePage(props) {
    return (<h2>Welcome!</h2>)
}

export default class Home extends React.Component {
    render() {

        console.log("- Home Props -", this.props);

        return (<div>
            <AppNavbar routeHistory={this.props.history} logoutHandler={this.props.logoutHandler}/>
            <div style={{ marginTop: "80px" }}>
                <Route exact path="/home" component={HomePage} />
                <Route path="/home/cards" component={Cards} />
                <Route path="/home/updatePassword" render={(props) => { return (<UpdatePassword {...props} handlePasswordChange={this.props.handlePasswordChange}/>)}} />
            </div>
        </div>);
    }
}