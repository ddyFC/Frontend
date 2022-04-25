import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';


class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const style = {
      
      backgroundColor: 'black',
      color: 'white',
    }

    return(
      <div style={style}>
          <h1>돌덩이 FC</h1>
          <h2>전화번호: 010-XXXX-XXXX</h2>
          <h2>주소: 성남시</h2>
          <a href='/'>Instagram</a><br></br>
          <a href='/'>Facebook</a>
      </div>
    )
  }
}

export default Footer;
