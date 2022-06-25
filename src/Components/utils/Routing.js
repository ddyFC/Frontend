import React from "react"
import Main from "Components/Main";
import Team from "Components/Team";
import Login from "Components/Login";
import Signup from "Components/Signup";
import Player from "Components/Player";
import Record from "Components/Record";
import PlayerRecord from "Components/subcomponent/PlayerRecord"
import Overall from "Components/Overall";
import YearRecord from "Components/YearRecord";
import Addplayer from "Components/Addplayer";
import Mypage from "Components/Mypage";
import {Route, BrowserRouter, Routes} from "react-router-dom";


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
          <Route path="/record/player" element={<PlayerRecord></PlayerRecord>}></Route>
          <Route path='/record/overall' element={<Overall></Overall>}></Route> 
          <Route path='/record/yearrecord' element={<YearRecord></YearRecord>}></Route> 
          {/* <Route path='/record/matchresult' element={<MatchResult data={this.state.results} column={this.state.resultColumn}></MatchResult>}></Route>  */}
          <Route path='/player/addplayer' element={<Addplayer></Addplayer>}></Route>
          <Route path='/mypage' element={<Mypage username={username} email={email}></Mypage>}></Route>
        </Routes>
      </BrowserRouter>
    )
}

export default Routing;
  