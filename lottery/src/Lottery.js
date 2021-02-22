import React, { Component } from 'react';
import Ball from './Ball';
import './Lottery.css';

class Lottery extends Component {
  static defaultProps = {
    title: 'Lottery',
    numBalls: 6,
    maxNum: 40,
  };
  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.numBalls }) };
    this.handleClick = this.handleClick.bind(this);
  }
  genLotto() {
    // this.setState((curState) => ({
    //   nums: curState.nums.map(
    //     (n) => Math.floor(Math.random() * this.props.maxNum) + 1
    //   ),
    // }));

    let arr = [];
    while (arr.length < this.props.numBalls) {
      let randomNum = Math.floor(Math.random() * this.props.maxNum) + 1;
      if (!arr.includes(randomNum)) {
        arr.push(randomNum);
      }
    }

    arr.sort((a, b) => a - b);
    this.setState({ nums: arr });
  }

  handleClick() {
    this.genLotto();
  }

  render() {
    return (
      <div className="Lottery">
        <div className="balls">
          <h1>{this.props.title}</h1>
          {this.state.nums.map((n) => (
            <Ball num={n} key={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </div>
    );
  }
}

export default Lottery;
