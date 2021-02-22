import { Component } from 'react';

import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six'],
  };
  constructor() {
    super();
    this.state = {
      num1: 'one',
      num2: 'one',
      isRolling: false,
    };
    this.Roll = this.Roll.bind(this);
  }

  Roll() {
    const ranNum1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const ranNum2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    this.setState({
      num1: ranNum1,
      num2: ranNum2,
      isRolling: true,
    });

    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }

  render() {
    return (
      <div className="RollDice">
        <div>
          <Die face={this.state.num1} rolling={this.state.isRolling} />
          <Die face={this.state.num2} rolling={this.state.isRolling} />
        </div>

        <button onClick={this.Roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? 'Rolling...' : 'Roll Dice'}
        </button>
      </div>
    );
  }
}

export default RollDice;
