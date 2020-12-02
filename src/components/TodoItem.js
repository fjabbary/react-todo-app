
import './TodoItem.css';
import React, { Component } from 'react';

class TodoItem extends Component {
    state = {
        done: false
    }

    handleDone = () => {
        this.setState({
            done: !this.state.done
        })
    }

    render() {
        const { todo, removeTodo } = this.props;
        return (
            <div>
                <li className={this.state.done ? 'done' : 'undone'} onClick={this.handleDone}>{todo.newTodo} <button>E</button><button onClick={removeTodo.bind(this, todo.id)}>X</button></li>
            </div>
        )
    }
}

export default TodoItem;




