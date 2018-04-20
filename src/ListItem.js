import React, { Component } from 'react';
import './ListItem.css';
import axios from 'axios';
import todoingServer from './todoing-server.js';

class ListItem extends Component {

  constructor(props) {
    super(props)
    this.state = props.item;
    console.log('ListItem', props.item);
  }
  
  onTextChange(e) {
    this.setState({ text: e.target.value });
    console.log('ontextchange', this.state);
  }
  
  onCheckChange(e) {
    console.log('oncheckchange', this.state);
    this.setState({ checked: e.target.checked });
  }
  
  save(e) {
    axios
      .post(todoingServer.path(), this.state)
      .then(res => console.log('listitem save res', res));
  }
  
  saveOnEnter(e) {
    if (e.key == 13) {
      this.save(e)
    }
  }

  render() {
    return (
      <div>
        <input type="checkbox" 
               checked={this.state.checked}
               onClick={this.onCheckChange.bind(this)}
               className="list-item-check"></input>
        <input type="text" 
               onBlur={this.save.bind(this)}
               onKeydown={this.saveOnEnter.bind(this)}
               onChange={this.onTextChange.bind(this)}
               value={this.state.text} 
               className="list-item-input"></input>
      </div>
    );
  }

}


export default ListItem;
