import React, { Component, useState, useEffect } from 'react';
import './App.css';
import Menu from './Components/Menu';
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from './Images/별배경.jpeg';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Routing from 'Components/utils/Routing';


var style = {
  backgroundImage: "url(" + { bg } + ")",
  backgroundColor: 'white',
}


function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState(false);

  const username = "temporary name";
 
  useEffect(() => {
    if(sessionStorage.getItem('email') === null){
    // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
      console.log('isLogin: ', isLogin)
    } else {
    // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
    // 로그인 상태 변경
      setIsLogin(true)
      console.log('isLogin: ', isLogin)
      setEmail(sessionStorage.getItem('email'));
      
      console.log('email: ', email);
    }
  })
  
  return (
    <div className='App' style={style}>
      <Header></Header>
      <Menu isLogin={isLogin} email = {email}></Menu>
      {isLogin ? 
      	// Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
        <Routing isLogin={isLogin} username={username} email={email} /> 
        : 
        <Login />
      }
      
      <Footer></Footer>
      
    </div>
  )
}

export default App;