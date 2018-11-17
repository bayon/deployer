import React, { Component } from 'react';
 
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor () {
    super()
    this.state = {
      data: []
    }
    this.handleClick = this.handleClick.bind(this)
  }
  /*
 http://www.forteworks.com/api/contacts_server.php
 <img src="{this.state.data.message}" height="200px" width="auto" />
 console.log(response.data)
 http://www.forteworks.com/api/contacts_server.php
 axios.get('https://dog.ceo/api/breeds/image/random')
  }*/
  handleClick () {
    //console.log('Success!')
    axios.get('http://www.forteworks.com/api/contacts_server.php')
    .then(response =>  this.setState({data: response.data}))
     
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>React Deployer</h2>
          <p>https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d</p>
        </header>
        <div className='button__container'>
        <button className='button'  onClick={this.handleClick}>See Data</button>
       <h2>http data:</h2>
       <pre>
           {this.state.data.map((data,i) => 
              <li key={i} className="myList">
                {i+1}. {data.contact_name}
                
              </li>
           )}
         </pre>
        <p>{this.state.data}</p>
      </div>
      </div>
    );
  }
}

export default App;
