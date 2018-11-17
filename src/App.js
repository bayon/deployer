import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      username: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }
  /*
  handleClick () {
    console.log('Success!')
    axios.get('https://api.github.com/users/bayon')
    .then(response =>  this.setState({username: response.data.name}))
     
  }*/
  handleClick () {
    console.log('Success!')
    axios.get('https://api.github.com/users/bayon')
    .then(response =>  this.setState({username: response.data.name}))
     
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>React Deployer</h2>
          <p>https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d</p>
        </header>
        <div className='button__container'>
        <button className='button'  onClick={this.handleClick}>Click Me</button>
        <p>{this.state.username}</p>
      </div>
      </div>
    );
  }
}

export default App;
