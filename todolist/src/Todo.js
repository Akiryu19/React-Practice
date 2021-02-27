import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      item: this.props.todo.item,
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  toggleForm() {
    this.setState({ isEditing: !this.isEditing });
  }
  handleChange(e) {
    this.setState({
      item: e.target.value,
    });
  }
  handleUpdate(e) {
    e.preventDefault();
    this.props.updateTodo(this.props.todo.id, this.state.item);
    this.setState({ isEditing: false });
  }

  render() {
    const finishedStyle = {
      textDecoration: 'line-through',
      fontStyle: 'italic',
      color: 'gray',
    };
    const todo = this.props.todo;
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.item}
              onChange={this.handleChange}
            />
            <button className="save">Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <ul>
            <li id={todo.id} style={todo.isFinished ? finishedStyle : {}}>
              <input
                type="checkbox"
                checked={todo.isFinished}
                onChange={() => this.props.changeStatus(todo.id)}
              />

              {todo.item}

              <button className="btn edit" onClick={this.toggleForm}>
                <i className="fas fa-edit "></i>
              </button>

              <button
                className="btn"
                onClick={() => this.props.removeTodo(todo.id)}
              >
                <i className="fas fa-trash-alt "></i>
              </button>
            </li>
          </ul>
        </div>
      );
    }

    return result;
  }
}

export default Todo;
