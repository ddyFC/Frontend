import React, { Component } from 'react';


class Record extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h1>기록실 입니다.</h1>
        <table>
            <tr>
                <td><a href='/overall'>통산기록</a></td>
                <td><a href='/yearrecord'>연도별기록</a></td>
            </tr>
        </table>
      </div>
    )
  }
}

export default Record;
