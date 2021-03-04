import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
import './Chips.css';
import chipsImg from './Chips.png';

class Chips extends Component {
  constructor() {
    super();
    this.state = {
      bags: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const deg = Math.random() * 90;
    const trans = Math.random() * 20;
    this.setState((preState) => ({ bags: [...preState.bags, { deg, trans }] }));
  }
  render() {
    const bags = this.state.bags.map((bag, i) => (
      <img
        src={chipsImg}
        alt="bag of lay's chips"
        key={i}
        className="bag"
        style={{
          transform: `translate(${bag.trans}px,${bag.trans}px) rotate(${bag.deg}deg)`,
        }}
      />
    ));
    return (
      <div className="Chips">
        <Message>
          <h1>Bags Eaten: {this.state.bags.length}</h1>
          <button onClick={this.handleClick}>Get One Bag</button>

          <Link to="/"> Back to Vending Machine</Link>
        </Message>
        {bags}
      </div>
    );
  }
}

export default Chips;
