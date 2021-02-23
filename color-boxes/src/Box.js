import React, { Component } from 'react';
import './Box.css';

export class Box extends Component {
  constructor(props) {
    super(props);
    this.state = { color: this.choice(this.props.colors) };
    this.handleClick = this.handleClick.bind(this);
  }

  randomColor() {
    let newColor;
    do {
      newColor = this.choice(this.props.colors);
    } while (newColor === this.state.color);

    this.setState({ color: newColor });
  }
  choice(arr) {
    const colorIdx = Math.floor(Math.random() * this.props.colors.length);
    return arr[colorIdx];
  }

  handleClick() {
    this.randomColor();
  }

  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      >
        Click :)
      </div>
    );
  }
}

export default Box;
