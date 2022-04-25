import React, { useState } from "react";
import axios from 'axios';

function Signup() {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'left',
    }
    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");
    const [Username, SetUsername] = useState("");
  
    const emailHandler = (e) => {
      e.preventDefault();
      SetEmail(e.target.value);
    };
  
    const passwordHandler = (e) => {
      e.preventDefault();
      SetPassword(e.target.value);
    };

    const usernameHandler = (e) => {
        e.preventDefault();
        SetUsername(e.target.value);
      };
  
    const submitHandler = (e) => {
      e.preventDefault();
      // state에 저장한 값을 가져옵니다.
      console.log(Username);
      console.log(Email);
      console.log(Password);
  
      let body = {
        back_number: '-1',
        name: Username,
        email: Email,
        password: Password,
      };
  
      axios
        .post("http://127.0.0.1:5000/api/v1/user", body)
        .then((res) => console.log(res));
    };

    // axios.post("http://127.0.0.1:5000/api/v1/user", {
    //     back_number: '-1',
    //     email: 'email',
    //     name: 'name',
    //     password: 'password', 
    // })
    // .then((response) => { console.log(response.data);})
    // .catch(function (error) {
    //     console.log(error);
    // });

    return (
        <>
        <div style={style}>
        <form onSubmit={submitHandler}>
            <h3>Sign Up</h3>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="First name" value={Username} onChange={usernameHandler} />
            </div>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" value={Email} onChange={emailHandler}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" value={Password} onChange={passwordHandler}/>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="#">sign in?</a>
            </p>
        </form>
        </div>
        </>
      
    );
}

export default Signup;