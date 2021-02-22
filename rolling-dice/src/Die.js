import { Component } from 'react';
import './Die.css';

class Die extends Component {
  render() {
    return (
      <i
        className={`Die fas fa-dice-${this.props.face} fa-8x ${
          this.props.rolling && 'shaking'
        }`}
      ></i>
    );
  }
}

export default Die;
