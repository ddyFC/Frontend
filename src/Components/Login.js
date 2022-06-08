import React, { Component, useState } from 'react';
import axios from 'axios';
import {Navbar, Nav} from 'react-bootstrap';

function Login() {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'left',
    }

    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");

    
    const emailHandler = (e) => {
        e.preventDefault();
        SetEmail(e.target.value);
    };

    const passwordHandler = (e) => {
        e.preventDefault();
        SetPassword(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        let body = {
            email: Email,
            password: Password,
        }

        axios
        .post("http://127.0.0.1:5000/api/v1/login", body)
        .then((res) => {
            console.log(res)
            console.log(body)
        });
    };

    return (
        <>
        <div style={style}>
        <form onSubmit={submitHandler}>
            <h3>Sign In</h3>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" value={Email} onChange={emailHandler}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" value={Password} onChange={passwordHandler}/>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
        </div>
        
        </>
    );
}

export default Login;
