import React, { Component } from 'react';


class MatchResult extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var results = this.props.data;
    var column = this.props.column;
    console.log(results);
    console.log(column);
    var i = 0;
    var lists = [];

    for (i=0; i< results.length; i++) {
        lists.push(
            <li>{results[i].team}</li>
        )
    }
    return(
      <div>
        <h1> this is match result </h1>
        <table>
            <thead>
                <tr>
                    {column.map((column) => (
                        <th key={column}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {results.map(({date, team, score, result}) => (
                    <tr key={date + team + score + result}>
                        <td>{date}</td>
                        <td>{team}</td>
                        <td>{score}</td>
                        <td>{result}</td>
                    </tr>
                ))}
            </tbody>
        </table>

      </div>
    )
  }
}

export default MatchResult;
