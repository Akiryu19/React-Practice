import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';
// import Soda from './Soda';
// import Chips from './Chips';
import Message from './Message';

export class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
        <Message>
          <h2>Hi, I'm the Vending machine, What do you want to eat?</h2>
        </Message>
        <Message>
          <h2>
            <Link to="/soda">Soda</Link>
            <Link to="/chips">Chips</Link>
            <Link to="/sardines">Sardines</Link>
          </h2>
        </Message>
      </div>
    );
  }
}

export default VendingMachine;
