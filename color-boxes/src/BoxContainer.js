import React, { Component } from 'react';
import Box from './Box';
import './BoxContianer.css';

export class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 15,
    colors: [
      '#54478c',
      '#2c699a',
      '#048ba8',
      '#0db39e',
      '#16db93',
      '#b9e769',
      '#efea5a',
      '#f1c453',
      '#f29e4c',
      '#f6aa1c',
      '#a06cd5',
      '#ffa69e',
      '#faa69e',
      '#fac69e',
      '#fa909e',
      '#b07d62',
      '#84a59d',
      '#fa65aa',
      '#81b29a',
      '#e76f51',
      '#57cc99',
      '#ff9f1c',
      '#2ec4b6',
    ],
  };

  render() {
    const boxes = Array.from({ length: this.props.numBoxes });
    return (
      <div className="BoxContianer">
        {boxes.map((box, idx) => (
          <Box colors={this.props.colors} key={idx} />
        ))}
      </div>
    );
  }
}

export default BoxContainer;
