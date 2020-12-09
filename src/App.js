import './App.css';
import React, { Component } from 'react';
import TodoList from './components/TodoList/TodoList';

class App extends Component {

  render() {
    return (
      <div className="app">
        <TodoList />
      </div>
    );
  }
}

export default App;


