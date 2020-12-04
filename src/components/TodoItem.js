
import './TodoItem.css';
import React, { Component } from 'react';

class TodoItem extends Component {


    handleDone = (itemId) => {
        this.props.toggleFn(itemId)
        console.log(this.props.completed)

    }

    render() {

        const { todo, removeTodo } = this.props;
        return (
            <div>
                <li className={this.props.completed ? 'done' : 'undone'} onClick={this.handleDone.bind(this, todo.id)}>{todo.newTodo} <button className="edit">E</button><button onClick={removeTodo.bind(this, todo.id)}>X</button></li>
            </div>
        )
    }
}

export default TodoItem;




