import React, { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import Box from './Box';
import BoxForm from './BoxForm';

export class BoxList extends Component {
  constructor() {
    super();
    this.state = {
      boxes: [],
    };
    this.addBox = this.addBox.bind(this);
    this.remove = this.remove.bind(this);
  }

  addBox(newBox) {
    this.setState((st) => ({ boxes: [...st.boxes, newBox] }));
  }
  remove(id) {
    this.setState({
      boxes: this.state.boxes.filter((box) => box.id !== id),
    });
  }
  render() {
    return (
      <div className="BoxList">
        <h1>Color Box Maker</h1>
        <BoxForm addBox={this.addBox} />
        <div className="boxes">
          {this.state.boxes.map((box, idx) => (
            <Box
              key={box.id}
              id={box.id}
              height={box.height}
              width={box.width}
              color={box.color}
              remove={() => this.remove(box.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BoxList;
