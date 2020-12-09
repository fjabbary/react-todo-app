import React, { Component } from 'react'

export default class TodoForm extends Component {

    state = {
        task: ''
    }

    handleChange = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addFn(this.state.task)

        this.setState({
            task: ''
        })
    }

    render() {
        return (
            <div className="todo-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <h4>New Todo</h4>
                        <input type="text" className="form-control" placeholder="New todo" value={this.state.task} onChange={this.handleChange} />
                    </div>
                    <button className="btn btn-success btn-block">Add Todo</button>
                </form>
            </div>
        )
    }
}
