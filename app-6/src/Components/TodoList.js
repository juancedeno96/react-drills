import React, {Component} from 'react' 

class TodoList extends Component {
    render() {
        return (
            <section>
                <h2>{this.props.todo}</h2>
            </section>
        )
    }
}

export default TodoList