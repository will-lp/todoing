import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import axios from 'axios';
import todoingServer from './todoing-server.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { sublists : [] };
  }
  
  componentDidMount() {
    axios
      .get(todoingServer.path())
      .then(res => { 
        var list = res.data;
        
        let callback = !list.sublists.length ? this.newList : null;
        
        this.setState(list, callback); 
      });
  }
  
  newList() {
    let sublists = this.state.sublists.slice();
    let sublist = { title: 'Nova lista', items: [] };
    sublists.push(sublist);
    
    axios
      .post(todoingServer.path(), sublist)
      .then(result => { 
        sublist._id = result.data._id; 
        this.setState({ sublists }); 
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
          {this.state.sublists.map(list => <List list={list}></List>)}
        </p>
        <button onClick={this.newList.bind(this)}>Nova sub-lista</button>
      </div>
    );
  }
}

export default App;
