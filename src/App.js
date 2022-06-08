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

var style = {
  backgroundImage: "url(" + { bg } + ")",
  backgroundColor: 'white',
}

// function App() {
//   return (
//  <Route path='/login' element={<Login></Login>}></Route> 
//   );
// }

// export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       resultColumn: [
//         "date", "team", "score", "result"
//       ],
//       results: [
//         {date: '2021/1/30', team:'에버그린', score: '3:0', result: 'win'},
//         {date: '2021/1/23', team: '놈즈FC', score: '5:4', result: 'win'},
//         {date: '2021/1/6', team: '코알라FC', score: '1:5', result: 'lose'},
//       ],
//       playerlist: [
//         {id: 1, name: '백준선', number: '49'},
//         {id: 2, name: '이종서', number: '5'},
//         {id: 3, name: '고운서', number: '4'},
//       ]
//     }
//   }
//   render() {
//     return(
//       <div className='App' style={style}>
//         {/* <img src={logo} alt="wrong image" height='300px'></img> */}
//         <Header></Header>
//         <Menu className='Menu'></Menu>
//         <BrowserRouter>
//           <Routes>
//             <Route path='/' element={<Main></Main>}></Route>
//             <Route path='/team' element={<Team></Team>}></Route> 
//             <Route path='/login' element={<Login></Login>}></Route> 
//             <Route path='/signup' element={<Signup></Signup>}></Route> 
//             <Route path='/player' element={<Player list="listsend"></Player>}></Route> 
//             <Route path='/record' element={<Record></Record>}></Route> 
//             <Route path='/record/overall' element={<Overall></Overall>}></Route> 
//             <Route path='/record/yearrecord' element={<YearRecord></YearRecord>}></Route> 
//             <Route path='/record/matchresult' element={<MatchResult data={this.state.results} column={this.state.resultColumn}></MatchResult>}></Route> 
//             <Route path='/player/addplayer' element={<Addplayer></Addplayer>}></Route>
//           </Routes>
//         </BrowserRouter>
//         <Footer></Footer>
//       </div>
//     )
//   }

// }

// export default App;

function App() {
  const [isLogin, setIsLogin] = useState(false)
 
  useEffect(() => {
    if(sessionStorage.getItem('email') === null){
    // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
      console.log('isLogin ?? :: ', isLogin)
    } else {
    // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
    // 로그인 상태 변경
      setIsLogin(true)
      console.log('isLogin ?? :: ', isLogin)
    }
  })
 
  return (
    <div className='App' style={style}>
      <Header></Header>
      <Menu isLogin={isLogin}></Menu>

      {isLogin ? 
      	// Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
        <Main isLogin={isLogin} /> 
        : 
        <Login />
      }
      
      <Footer></Footer>
      {/* <BrowserRouter>
           <Routes>
             <Route path='/' element={<Main></Main>}></Route>
             <Route path='/team' element={<Team></Team>}></Route> 
             <Route path='/login' element={<Login></Login>}></Route> 
             <Route path='/signup' element={<Signup></Signup>}></Route> 
             <Route path='/player' element={<Player list="listsend"></Player>}></Route> 
             <Route path='/record' element={<Record></Record>}></Route> 
             <Route path='/record/overall' element={<Overall></Overall>}></Route> 
             <Route path='/record/yearrecord' element={<YearRecord></YearRecord>}></Route> 
             <Route path='/record/matchresult' element={<MatchResult data={this.state.results} column={this.state.resultColumn}></MatchResult>}></Route> 
             <Route path='/player/addplayer' element={<Addplayer></Addplayer>}></Route>
           </Routes>
         </BrowserRouter> */}
    </div>
  )
}

export default App;