import React, { Component } from 'react';
import Coin from './Coin';
import head from './head.jpg';
import tail from './tail.jpg';
import './CoinContainer.css';

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: 'heads', imgSrc: head },
      { side: 'tails', imgSrc: tail },
    ],
  };
  constructor() {
    super();
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  choice(arr) {
    const index = Math.floor(Math.random() * arr.length);

    return arr[index];
  }
  flipCoin() {
    const newCoin = this.choice(this.props.coins);
    this.setState((preState) => {
      // let newState = {
      //   ...preState,
      //   currCoin: newCoin,
      //   nFlips: preState.nFlips + 1,
      // };
      // if (newCoin.side === 'heads') {
      //   newState.nHeads += 1;
      // } else {
      //   newState.nTails += 1;
      // }

      // return newState;
      return {
        currCoin: newCoin,
        nFlips: preState.nFlips + 1,
        nHeads: preState.nHeads + (newCoin.side === 'heads' ? 1 : 0),
        nTails: preState.nTails + (newCoin.side === 'tails' ? 1 : 0),
      };
    });
  }
  handleClick() {
    this.flipCoin();
  }
  render() {
    return (
      <div className="CoinContainer">
        <h2>Let's flip a coin</h2>
        <Coin data={this.state.currCoin} />
        <button onClick={this.handleClick}>Flip Coin</button>
        <p>
          Out of flips {this.state.nFlips}, There have been {this.state.nHeads}{' '}
          heads and {this.state.nTails} tails.
        </p>
      </div>
    );
  }
}

export default CoinContainer;
