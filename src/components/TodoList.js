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

        this.setState({ todos: [...this.state.todos, withId] }, () => {
            localStorage.setItem('todos', JSON.stringify(this.state.todos))
        })

    }

    removeTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    toggleCompleted = (itemId) => {
        const localData = JSON.parse(localStorage.getItem('todos'))
        const foundItem = localData.find(todo => todo.id === itemId)

        foundItem.completed = !foundItem.completed

        console.log(localData)

        localStorage.setItem('todos', JSON.stringify(localData))
        this.setState({
            todos: localData
        })
    }

    done = () => {
        const localData = JSON.parse(localStorage.getItem('todos'))
        this.setState({
            todos: localData.filter(todo => todo.completed)
        })
    }

    undone = () => {
        const localData = JSON.parse(localStorage.getItem('todos'))


        this.setState(() => ({
            todos: localData.filter(todo => !todo.completed)
        }))
    }

    allTasks = () => {
        const localData = JSON.parse(localStorage.getItem('todos'))
        this.setState(() => ({
            todos: localData
        }))
    }


    render() {


        const todosJSX = this.state.todos.map(todo => <TodoItem key={todo.id} todo={todo} removeTodo={this.removeTodo} state={this.state} toggleFn={this.toggleCompleted} completed={todo.completed} />)

        return (
            <div className="Todo-list">
                <h1>Todo List! <button onClick={this.done}>Done Tasks</button> <button onClick={this.undone}>Undone Tasks</button> <button onClick={this.allTasks}>All Tasks</button></h1>
                <p>A Simple React Todo List App</p>
                {todosJSX}

                <TodoForm handleAddTodo={this.addTodo} />
            </div>
        )
    }
}
