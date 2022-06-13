import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl, Container, Row, Col } from 'react-bootstrap';
import './CSS/Menu.css';


function Menu({isLogin, email}) {
  const style = {
    // display: 'flex',
    // justifyContent: 'center'
  }
  console.log(email);

  return(
    <>
    <div className='App' style={style}>

      {isLogin ? 
      	// Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
        <Loggedin email={email}></Loggedin>
        : 
        <NotLoggedin></NotLoggedin>
      }
      
      
    </div>
    </>
  )
}

function NotLoggedin() {
  return (
    <>
        <Navbar bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href='/'>돌덩이 FC</Navbar.Brand>
            <Nav className='me-auto'>
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
            </Nav>
          </Container>
          
          <Container>
            <Nav className='me-auto'>
              <Nav.Link href="/login">로그인</Nav.Link>
              <Nav.Link href="/signup">회원가입</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
  );
}

function Loggedin({email}) {

  function logoutHandler(e){
    e.preventDefault();
    console.log("logout");
    sessionStorage.removeItem('email');
    document.location.href = '/'
  }

  return (
    <>
        <Navbar bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href='/'>돌덩이 FC</Navbar.Brand>
            <Nav className='me-auto'>
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
            </Nav>
          </Container>
          
          <Container>
            <Nav className='me-auto'>
              <Nav.Link href="/mypage">Hello, {email}</Nav.Link>
              <Nav.Link href="/mypage">Mypage</Nav.Link>
            </Nav>
            <button onClick={logoutHandler}>Logout</button>
          </Container>
        </Navbar>
      </>
  );
}


export default Menu;
