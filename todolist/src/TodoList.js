import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import './TodoList.css';

export class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { item: 'Add your first todo task!', isFinished: false, id: uuidv4() },
      ],
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }
  addTodo(newTodo) {
    this.setState((prevSt) => ({ todos: [...prevSt.todos, newTodo] }));
  }
  changeStatus(id) {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id ? { ...todo, isFinished: !todo.isFinished } : todo
      ),
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }
  updateTodo(id, updatedItem) {
    const updatedTodos = this.state.todos.map((todo) =>
      todo.id === id ? { ...todo, item: updatedItem } : todo
    );
    this.setState({ todos: updatedTodos });
  }
  render() {
    return (
      <div className="TodoList">
        <h1>Todo List</h1>
        {this.state.todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            changeStatus={this.changeStatus}
            removeTodo={this.removeTodo}
            updateTodo={this.updateTodo}
          />
        ))}
        {/* <Todo
          todos={this.state.todos}
          changeStatus={this.changeStatus}
          removeTodo={this.removeTodo}
          editTodo={this.editTodo}
       */}
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
