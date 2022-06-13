import React, { Component, useState, useEffect } from 'react';
import './App.css';
import Menu from './Components/Menu';
import Team from './Components/Team';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Player from './Components/Player';
import Record from './Components/Record';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Overall from './Components/Overall';
import YearRecord from './Components/YearRecord';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from './Images/별배경.jpeg';
import MatchResult from './Components/MatchResult';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Addplayer from 'Components/Addplayer';
import Mypage from 'Components/Mypage';

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

function Routing({isLogin, username, email} ) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/team' element={<Team></Team>}></Route> 
        <Route path='/login' element={<Login></Login>}></Route> 
        <Route path='/signup' element={<Signup></Signup>}></Route> 
        <Route path='/player' element={<Player list="listsend"></Player>}></Route> 
        <Route path='/record' element={<Record></Record>}></Route> 
        <Route path='/record/overall' element={<Overall></Overall>}></Route> 
        <Route path='/record/yearrecord' element={<YearRecord></YearRecord>}></Route> 
        {/* <Route path='/record/matchresult' element={<MatchResult data={this.state.results} column={this.state.resultColumn}></MatchResult>}></Route>  */}
        <Route path='/player/addplayer' element={<Addplayer></Addplayer>}></Route>
        <Route path='/mypage' element={<Mypage username={username} email={email}></Mypage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;