import React, { Component } from 'react'
import TodoForm from '../TodoForm/TodoForm'
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css';
import { v4 as uuidv4 } from 'uuid';


export default class TodoList extends Component {

    state = {
        todos: []
    }

    handleAdd = (newTodo) => {
        const newObj = { id: uuidv4(), task: newTodo, completed: false }
        this.setState({
            todos: [...this.state.todos, newObj]
        })
    }

    handleDelete = (todoId) => {
        const filteredArr = this.state.todos.filter(todo => todo.id !== todoId)
        this.setState({
            todos: filteredArr
        })
    }

    handleToggle = (todoId) => {
        const foundTodo = this.state.todos.find(todo => todo.id === todoId)
        foundTodo.completed = !foundTodo.completed

        this.setState({
            todos: [...this.state.todos]
        })
    }

    handleUpdate = (todoId, updatedTask) => {
        const foundTodo = this.state.todos.find(todo => todo.id == todoId)
        foundTodo.task = updatedTask

        this.setState({
            todos: [...this.state.todos]
        })
    }

    render() {
        const { todos } = this.state
        const todoJSX = todos.map(todo => <TodoItem key={todo.id} todo={todo} deleteFn={this.handleDelete} toggleFn={this.handleToggle} updateFn={this.handleUpdate} />)

        return (
            <div className="todo-list">
                <h1>Todo List!</h1>
                <p>A Simple React App </p>
                <h3>{todos.length} todos</h3>
                <ul className="list-group my-4">
                    {todoJSX}
                </ul>
                <TodoForm addFn={this.handleAdd} />
            </div>
        )
    }
}
