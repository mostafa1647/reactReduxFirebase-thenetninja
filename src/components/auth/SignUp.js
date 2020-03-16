import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authAction";

class SignUp extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        isFormSubmitted: false,
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
        this.setState({
            ...this.state,
            isFormSubmitted: true,
            authError: null
        });
    };
    render() {
        const {authError} = this.props;
        if(this.props.auth.uid) return <Redirect to={'/'} />;
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id={'firstName'} onChange={this.handleChange} value={this.state.firstName}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id={'lastName'} onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id={'email'} onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id={'password'} onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">SignUp</button>
                    </div>
                    {
                        // outputting signup error
                        this.state.isFormSubmitted && authError ? <div className="red-text center"><p>{ authError }</p></div> : null
                    }
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => { dispatch(signUp(newUser)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);