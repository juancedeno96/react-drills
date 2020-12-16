import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './Component/TodoList';
class App extends Component {
  constructor() {
    super() 
      this.state = {
        todoList: ['Eat', 'Drink', 'Be Merry'],
        todoInput: ''
      }
    }
    handleChange = (e) => {
      this.setState({todoInput: e.target.value})
    }

    addTodo = (e) => {
      e.preventDefault()
      const listCopy = this.state.todoList.slice()
      listCopy.push(this.state.todoInput)

      this.setState({
        todoList: listCopy,
        todoInput:''
      })
    }

    render() {
      return (
        <div className = "App">
          <h4>Todo List</h4>
          <form>
          <input value ={this.state.todoInput} onChange = {e=> this.handleChange(e)}/>
          <button onClick = {e=>this.addTodo(e)}>Add task</button>
          </form>
          {this.state.todoList.map((todo, i)=>(
 <TodoList key = {i} todo={todo}/>
          ))}
         
        </div>
      )
    }
  }


export default App;
