import React, { Component } from 'react';

class TodoForm extends Component {

    state = {
        newTodo: ''
    }

    handleChange = (e) => {
        this.setState({
            newTodo: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddTodo(this.state)

        this.setState({
            newTodo: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="new-todo">New Todo</label>
                        <input type="text" placeholder="New Todo" value={this.state.newTodo} onChange={this.handleChange} />
                        <button>ADD TODO</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default TodoForm;
