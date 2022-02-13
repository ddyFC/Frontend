import React, { Component } from 'react';

class Team extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("this is team");
    return(
      <div>
        <h1>팀 소개입니다.</h1>
      </div>
    )
  }

}

export default Team;
