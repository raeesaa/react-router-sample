import React from "react";
import { Link } from "react-router-dom";

export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            reEnterPassword: ""
        }
    }

    inputChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitHandler = (event) => {
        event.preventDefault();
        const registrationDetails = { username: this.state.username, password: this.state.password };
        this.props.registerHandler(registrationDetails);
        this.props.history.push("/");
    }

    render() {
        return (<div className="wrapper">
            <form className="form-signin">
                <h2 className="form-signin-heading">Sign Up</h2>
                <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Email Address"
                    onChange={this.inputChangeHandler} />
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    onChange={this.inputChangeHandler} />
                <input
                    type="password"
                    className="form-control"
                    name="reEnterPassword"
                    placeholder="Re-enter Password"
                    onChange={this.inputChangeHandler} />
                <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                    onClick={this.submitHandler}>
                    Register
                        </button>
                <p className="text-right margin-top-20"><Link to="/">Already a user? Login</Link></p>
            </form>
        </div>);
    }
}