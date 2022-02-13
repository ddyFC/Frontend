import React, { Component } from 'react';
import Record from './Record'

class Overall extends Component {
  constructor(props) {
    super(props);
    this.state= {
        opponents: [
            {id: 1, name: 'cruise', result: '1'},
            {id: 2, name: 'jcfc', result: '-1'}
        ]
    }
  }
  render() {
    var i = 0;
    var lists = [];
    var data = this.state.opponents;
    console.log(data);
    for (i=0; i<this.state.opponents.length; i++) {
        console.log(i);
        lists.push(
            <li>{data[i].name}</li>
        )
    }
    return(
      <div>
        <Record></Record>
        <h1> this is overall </h1>
        {lists}
      </div>
    )
  }
}

export default Overall;
