import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoFrom.css';

export class NewTodoForm extends Component {
  constructor() {
    super();
    this.state = {
      item: '',
      isFinished: false,
      id: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      item: e.target.value,
      isFinished: false,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      ...this.state,
      id: uuidv4(),
    };
    this.props.addTodo(newTodo);
    this.setState({
      item: '',
      isFinished: false,
      id: '',
    });
  }
  render() {
    return (
      <div className="NewTodoFrom">
        <form onSubmit={this.handleSubmit}>
          {/* <label>New Todo:</label> */}

          <input
            tyep="text"
            value={this.state.item}
            name="item"
            placeholder="New Todo"
            onChange={this.handleChange}
            required
          />

          <button>Add </button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
