import React, { Component } from 'react';
import './TodoItem.css'


class TodoItem extends Component {

    state = {
        isEditing: false,
        task: this.props.todo.task
    }

    handleUpdate = (e) => {
        this.setState({
            task: e.target.value
        })
        this.props.updateFn(this.props.todo.id, e.target.value)
    }

    makeEdit = () => {
        this.setState({
            isEditing: true
        })
    }

    finishEdit = () => {
        this.setState({
            isEditing: false
        })
    }

    render() {
        const { todo, toggleFn, deleteFn } = this.props

        let jsx;
        if (!this.state.isEditing) {
            jsx =
                <li className={todo.completed ? "list-group-item done" : "list-group-item"} > <span onClick={toggleFn.bind(this, todo.id)}>{todo.task}</span>
                    <i className="fas fa-trash-alt float-right" onClick={deleteFn.bind(this, todo.id)}></i>
                    <i className="far fa-edit float-right mr-2" onClick={this.makeEdit}></i>
                </li>
        } else {
            jsx = <div className="form-group">
                <input type="text" className="form-control" value={this.state.task} onChange={this.handleUpdate} />
                <button className="btn btn-info" onClick={this.finishEdit}>Save</button>
            </div>
        }

        return (
            <div>
                {jsx}
            </div>
        );
    }
}

export default TodoItem;
