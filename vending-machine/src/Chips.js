import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import chipsImg from './Chips.png';
import './Chips.css';

class Chips extends Component {
  constructor() {
    super();
    this.state = {
      hasChips: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      hasChips: true,
    });
  }
  render() {
    return (
      <div className="Chips">
        <h1 className="Chips-title">Do you want some Chips?</h1>
        {this.state.hasChips ? (
          <img className="Chips-img" src={chipsImg} alt="chips" />
        ) : (
          <button className="Chips-btn" onClick={this.handleClick}>
            Yes!
          </button>
        )}
        <Link to="/"> Back to Vending Machine</Link>
      </div>
    );
  }
}

export default Chips;
