import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';

class Menu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("this is menu");
    return(
      <div>
        <Navbar>
            <Nav.Link href="/team">팀 소개</Nav.Link>
            <Nav.Link href="/player">선수 소개</Nav.Link>
            <Nav.Link href="/record">기록실</Nav.Link>
            <NavDropdown>
              <NavDropdown.Item href="/record/overall">전체 기록</NavDropdown.Item>
              <NavDropdown.Item href="/record/yearrecord">연도별 기록</NavDropdown.Item>
              <NavDropdown.Item href="/record/matchresult">경기 결과</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/info">자료실</Nav.Link>
            <Nav.Link href="/photo">사진첩</Nav.Link>
            <Nav.Link href="/apply">지원서</Nav.Link>
        </Navbar>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>
    )
  }

}

export default Menu;
