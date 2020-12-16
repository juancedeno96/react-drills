import React, {Component} from 'react'

class App extends Component {
  constructor() {
    super ();
    this.state = {
      text: ''
    }
  }
  render () {
    return (
      <div>
        <label>Type Here:</label>
        <input onChange={(e)=> this.handleChange(e.target.value)} />
        <p>{this.state.text}</p>
      </div>
    )
  }
  handleChange(e){
    this.setState({text: e })
  }
}

export default App