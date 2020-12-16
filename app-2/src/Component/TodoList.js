import React, {Component} from 'react'

class TodoList extends Component {
    render () {
        return(
            <div>
                <p>{this.props.todo}</p>
            </div>
        )
    }
}

export default TodoList