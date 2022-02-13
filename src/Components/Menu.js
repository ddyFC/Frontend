import React, { Component } from 'react';

class Menu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("this is menu");
    return(
      <div>
        <ul>
            <li><a href='/team'>팀 소개</a></li>
            <li><a href='/player'>선수 소개</a></li>
            <li><a href='/record'>기록실</a></li>
            <li>자료실</li>
            <li>사진첩</li>
            <li>지원서</li>
        </ul>
      </div>
    )
  }

}

export default Menu;
