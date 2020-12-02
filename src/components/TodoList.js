import React, { Component } from 'react'
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import TodoItem from './TodoItem';
import './TodoList.css'

export default class TodoList extends Component {

    state = {
        todos: []
    }

    addTodo = (newTodo) => {
        const withId = { ...newTodo, id: uuidv4(), completed: false }

        this.setState({
            todos: [...this.state.todos, withId]
        })
    }

    removeTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    render() {
        console.log(this.state.todos)
        const todosJSX = this.state.todos.map(todo => <TodoItem key={todo.id} todo={todo} removeTodo={this.removeTodo} />)

        return (
            <div className="Todo-list">
                <h1>Todo List!</h1>
                <p>A Simple React Todo List App</p>
                {todosJSX}

                <TodoForm handleAddTodo={this.addTodo} />
            </div>
        )
    }
}
