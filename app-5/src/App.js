import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Image from './components/Image'

class App extends Component {
constructor() {
  super()
  this.state = {
    imgLink: 'https://sneakerbardetroit.com/wp-content/uploads/2018/10/Air-Jordan-1-Chicago-Crystal-Release-Date.jpg'

  }
}

  render(){
  return (
    <div className="App">
     <Image myImage = {this.state.imgLink}/>
    </div>
  )
  }
}

export default App;
