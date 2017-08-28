import React from "react";

export default class UpdatePassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newPassword: "",
            reEnterNewPassword: "",
            passwordChangedSuccessfully: false
        };
    }

    inputChangeHandler = (event) => {
        this.setState({
            passwordChangedSuccessfully: false
        });
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        const newPassword = this.state.newPassword;

        // eslint-disable-next-line
        let isPasswordChangeSuccessful = this.props.handlePasswordChange(newPassword);
        this.setState({
            newPassword: "",
            reEnterNewPassword: "",
            passwordChangedSuccessfully: isPasswordChangeSuccessful
        });
    }

    render() {
        return (<div className="wrapper">
            <form className="form-signin">
                <h2 className="form-signin-heading">Change Password</h2>
                <input
                    type="password"
                    className="form-control"
                    name="newPassword"
                    placeholder="New Password"
                    onChange={this.inputChangeHandler}
                    value={this.state.newPassword} />
                <input
                    type="password"
                    className="form-control"
                    name="reEnterNewPassword"
                    placeholder="Re-enter new Password"
                    onChange={this.inputChangeHandler}
                    value={this.state.reEnterNewPassword} />
                <button
                    className="btn btn-lg btn-primary btn-block"
                    type="submit"
                    onClick={this.submitHandler}>
                    Change Password
                    </button>

                <p className="text-center">{this.state.passwordChangedSuccessfully ? "Password changed successfully" : ""}</p>
            </form>
        </div>);
    }
}