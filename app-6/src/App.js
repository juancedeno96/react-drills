import React, {Component} from 'react';
import './App.css';
import TodoList from './Components/TodoList'


class App extends Component {
constructor() {
  super() 
  this.state= {
    todoList: [],
    todoInput: ''
  }
}

handleInput(val) {
  this.setState({todoInput: val})
}

addInput() {
  const listCopy = this.state.todoList.slice()
  listCopy.push(this.state.todoInput)

  this.setState({
    todoList: listCopy,
    todoInput: ''
  })
}

  render () {
    return(
      <div className ='App' >
        <h4>My Todo List</h4>
        <input  value = {this.state.todoInput} onChange = {e=> this.handleInput(e.target.value)}/>
        <button onClick = {()=> this.addInput()}>Add</button>
        {this.state.todoList.map((todo, i)=>(
          <TodoList key = {i} todo={todo}/>
        ))}
        
      </div>
    )
  }
}

export default App