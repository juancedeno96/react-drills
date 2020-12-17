import React, {Component} from 'react'

class NewTask extends Component {
    constructor () {
        super()
        this.state = {
            userInput: ''
        }
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleInputChange(val) {
        this.setState({input: val})
    }

    handleAdd() {
        this.props.add(this.state.userInput)
        this.setState({userInput: ''})
    }

    render() {
        return(
            <section>   
                <input
                value = {this.state.userInput}
                onChange={e=>this.handleInputChange(e.target.value)}
                />
                <button onClick={this.handleAdd}>Add</button>
            </section>
        )
    }
}

export default NewTask