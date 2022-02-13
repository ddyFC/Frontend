import React, { Component } from 'react';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
        playerlist: [
            {id: 1, name: '백준선', number: '49'},
            {id: 2, name: '이종서', number: '5'},
            {id: 3, name: '고운서', number: '4'},
        ]
    }
  }
  render() {
    console.log("this is player");
    var lists = [];
    var i = 0;
    var plist = this.state.playerlist;
    for (i=0; i<plist.length; i++) {
        var temp = [];
        temp.push (
            <td>{plist[i].name}</td>
        )
        temp.push (
          <td>{plist[i].number}</td>
        )
        lists.push (
          <tr>{temp}</tr>
        )
    }
    return(
      <div>
        <h1>선수 소개입니다.</h1>
        <table>
          {lists}
        </table>
      </div>
    )
  }

}

export default Player;
