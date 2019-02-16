import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './componets/Navigation';
import TodoForm from './componets/TodoForms';
import { todos } from './todos.json';


class App extends Component {

  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);

    var foo = ['En', 'un', 'lugar', 'de', 'la', 'Mancha'];
    console.info(...foo);
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  removeTodo(index) {
    if (window.confirm('You are sure, you want rto delete it?')) {
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index;
        })
      })
    }


  }
  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3> {todo.title} </h3>
              <span className="badge badge-pill badge-danger  ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <h3> {todo.description} </h3>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)} >
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <Navigation title="Home" ntaks={this.state.todos.length} />
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <div className="row mt-4">
            <TodoForm onAddTodo={this.handleAddTodo} />
          </div>
          <div className="row mt-8">
            {todos}
          </div>
        </div>
      </div>
    );
  }
}
export default App;

//https://youtu.be/Q3JBvLOzL0o?list=PLL0TiOXBeDai6x37_wQwWX6_qNZUM4FBm&t=2172 pero repasar maps primero
