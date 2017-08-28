import React from "react";
import { Link } from "react-router-dom";

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loginFailed: false
        }
    }

    inputChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitHandler = (event) => {
        event.preventDefault();
        const loginCredentials = { username: this.state.username, password: this.state.password };
        const isLoginSuccessful = this.props.loginHandler(loginCredentials);
        if (isLoginSuccessful) {
            this.props.history.push("/home");
        } else {
            this.setState({
                username: "",
                password: "",
                loginFailed: true
            });
        }
    }

    render() {
        return (<div className="wrapper">
            <form className="form-signin">
                <h2 className="form-signin-heading">Please login</h2>
                <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Email Address"
                    onChange={this.inputChangeHandler}
                    value={this.state.username} />
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    onChange={this.inputChangeHandler}
                    value={this.state.password} />
                <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                    onClick={this.submitHandler}>
                    Login
                        </button>
                 <p className="text-center text-danger">{this.state.loginFailed === true ? "Incorrect username or password!" : ""}</p>
                <p className="text-right margin-top-20"><Link to="/register">New User? Sign Up</Link></p>
            </form>
        </div>);
    }
}