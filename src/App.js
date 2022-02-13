import React, { Component } from 'react';
import './App.css';
import Menu from './Components/Menu';
import Team from './Components/Team';
import Player from './Components/Player';
import Record from './Components/Record';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Overall from './Components/Overall';
import YearRecord from './Components/YearRecord';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './Images/돌덩이로고.png';
import MatchResult from './Components/MatchResult';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultColumn: [
        "date", "team", "score", "result"
      ],
      results: [
        {date: '2021/1/30', team:'에버그린', score: '3:0', result: 'win'},
        {date: '2021/1/23', team: '놈즈FC', score: '5:4', result: 'win'},
        {date: '2021/1/6', team: '코알라FC', score: '1:5', result: 'lose'},
      ]
    }
  }
  render() {
    console.log("hello");
    return(
      <div>
        <img src={logo} alt="wrong image" height='300px'></img>
        <h1>돌덩이 홈페이지입니다.</h1>
        <Menu></Menu>
        <BrowserRouter>
          <Routes>
            <Route path='/team' element={<Team></Team>}></Route> 
            <Route path='/player' element={<Player></Player>}></Route> 
            <Route path='/record' element={<Record></Record>}></Route> 
            <Route path='/record/overall' element={<Overall></Overall>}></Route> 
            <Route path='/record/yearrecord' element={<YearRecord></YearRecord>}></Route> 
            <Route path='/record/matchresult' element={<MatchResult data={this.state.results} column={this.state.resultColumn}></MatchResult>}></Route> 

          </Routes>
        </BrowserRouter>
      </div>
    )
  }

}

export default App;
