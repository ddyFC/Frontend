import React, { Component } from 'react';

class Team extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("this is team");
    return(
      <div>
        <h1>창단일</h1>
        <p>2020년 2월 2일</p>
        <h1>창단 멤버</h1>
        <p>고운서, 김석태, 변호준, 백준선</p>
        <h1>팀 목적</h1>
        <p>축구를 좋아하는 사람들이 축구를 즐기고 실력을 향상 시킬 수 있는 모임</p>
        <h1>팀 지원 방법 <button type="button">지원서</button> </h1>
      </div>
    )
  }

}

export default Team;
