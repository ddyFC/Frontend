import React, { Component } from 'react';
import Record from './Record'

class YearRecord extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <Record></Record>
        <h1> this is year record </h1>
      </div>
    )
  }
}

export default YearRecord;
