import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './BoxForm.css';
export class BoxForm extends Component {
  constructor() {
    super();
    this.state = { height: '', width: '', color: '#000000' };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitHandler(e) {
    e.preventDefault();
    const newBox = { ...this.state, id: uuidv4() };
    this.props.addBox(newBox);
    this.setState({ height: '', width: '', color: '#000000' });
  }

  render() {
    return (
      <div className="BoxForm">
        <form onSubmit={this.submitHandler}>
          <div>
            <label htmlFor="height">Box Height: </label>
            <input
              type="number"
              placeholder="50"
              name="height"
              onChange={this.changeHandler}
              value={this.state.height}
              id="height"
              required
            />
            px
          </div>

          <div>
            <label htmlFor="width">Box Width: </label>
            <input
              type="number"
              placeholder="50"
              name="width"
              onChange={this.changeHandler}
              value={this.state.width}
              required
              id="width"
            />
            px
          </div>
          <div>
            <label htmlFor="color">Box Color: </label>
            <input
              type="color"
              name="color"
              onChange={this.changeHandler}
              value={this.state.color}
              required
            />
          </div>

          <button>Create Box</button>
        </form>
      </div>
    );
  }
}

export default BoxForm;
