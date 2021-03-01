import React, { Component } from 'react';
import './Card.css';

export class Card extends Component {
  constructor() {
    super();
    const transX = Math.random() * 90 - 45;
    const transY = Math.random() * 90 - 40;
    const angle = Math.random() * 90 - 55;
    this._transfrom = `translate(${transX}px,${transY}px) rotate(${angle}deg)`;
  }
  render() {
    return (
      <div className="Card">
        <img
          style={{ transform: this._transfrom }}
          src={this.props.card.image}
          alt={this.props.card.name}
        />
      </div>
    );
  }
}

export default Card;
