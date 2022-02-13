import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';


class Record extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h1>기록실 입니다.</h1>
        <h3>전체 기록 혹은 연도별 기록을 선택하세요.</h3>
        <Navbar>
            <Nav.Link href="/record/overall">전체 기록</Nav.Link>
            <Nav.Link href="/record/yearrecord">연도별 기록</Nav.Link>
        </Navbar>
      </div>
    )
  }
}

export default Record;
