import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lists : [] };
  }
  
  componentDidMount() {
    axios
      .get('http://localhost:3001/echo')
      .then(res => { 
        var lists = res.data;
        this.setState({ lists }); 
        console.log('app state', this.state);
      });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.title}</h1>
        </header>
        <p className="App-intro">
          {this.state.lists.map(list => <List list={list}></List>)}
        </p>
      </div>
    );
  }
}

export default App;
