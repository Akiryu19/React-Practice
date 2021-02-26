import React, { Component } from 'react';
import './Box.css';

export class Box extends Component {
  render() {
    return (
      <div className="Box">
        <div
          style={{
            height: `${this.props.height}px`,
            width: `${this.props.width}px`,
            backgroundColor: this.props.color,
          }}
        ></div>
        <button onClick={this.props.remove}>Remove</button>
      </div>
    );
  }
}

export default Box;
