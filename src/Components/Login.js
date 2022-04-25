import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';


class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'left',
    }
  
    return (
        <>
        <div style={style}>
        <form>
            <h3>Sign In</h3>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
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
}

export default Login;
