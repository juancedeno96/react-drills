import React, { Component } from 'react';
import NewTask from './Components/NewTask'
import './App.css';

class App extends Component {
  constructor() {
    super() 
    this.state = {
      taskArr: []
    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }

handleAddTask(task) {
  this.setState({taskArr: [...this.state.taskArr, task]})
}

  render() {
  return (
    <div className="App">
      <NewTask add={this.handleAddTask}/>
    </div>
  );
}}

export default App;
