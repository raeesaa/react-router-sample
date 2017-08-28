import React from "react";
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class AppNavbar extends React.Component {

    handleLogout = (event) => {
        console.log("Logout clicked!", this.props);
        this.props.logoutHandler();
        this.props.routeHistory.push("/");
    }

    render() {
        return (<Navbar fixedTop={true}>
            <Navbar.Header>
                <Navbar.Brand>
                    <span><Link to="/home">React-router Sample App</Link></span>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1}><Link to="/home/cards">Cards</Link></NavItem>
                <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}><Link to="/home/updatePassword">Update Password</Link></MenuItem>
                    <MenuItem eventKey={3.2} onClick={this.handleLogout}>Logout</MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar>
        );
    }
}