import React, { Component } from 'react';
import './App.css';
import Menu from './Components/Menu';
import Team from './Components/Team';
import Player from './Components/Player';
import Record from './Components/Record';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Overall from './Components/Overall';
import YearRecord from './Components/YearRecord';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("hello");
    return(
      <div>
        <img src="Images/돌덩이로고.png" alt="wrong image"></img>
        <h1>돌덩이 홈페이지입니다.</h1>
        <Menu></Menu>
        <BrowserRouter>
          <Routes>
            <Route path='/team' element={<Team></Team>}></Route> 
            <Route path='/player' element={<Player></Player>}></Route> 
            <Route path='/record' element={<Record></Record>}></Route> 
            <Route path='/overall' element={<Overall></Overall>}></Route> 
            <Route path='/yearrecord' element={<YearRecord></YearRecord>}></Route> 
          </Routes>
        </BrowserRouter>
      </div>
    )
  }

}

export default App;
