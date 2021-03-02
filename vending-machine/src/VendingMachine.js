import React, { Component } from 'react';
import { NavLink, Link, Route } from 'react-router-dom';
import './VendingMachine.css';
import Soda from './Soda';
import Chips from './Chips';

export class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
        <div className="VendingMachine-title">
          <h1>Hi, I'm the Vending machine, What do you want to eat?</h1>
        </div>
        <div>
          <Link to="./soda">Soda</Link>
          <Link to="./chips">Chips</Link>
          <Link to="./sardines">Sardines</Link>
        </div>
      </div>
    );
  }
}

export default VendingMachine;
