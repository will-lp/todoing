import React, { Component } from 'react';
import './ListItem.css';
import axios from 'axios';
import todoingServer from './todoing-server.js';

class ListItem extends Component {

  constructor(props) {
    super(props)
    this.state = props.item;
    this.sublistId = props.sublistId;
    if (!this.state.id) {
      this.save();
    }
  }
  
  onTextChange(e) {
    this.setState({ text: e.target.value });
  }
  
  onCheckChange(e) {
    console.log('oncheckchange', e.target.checked);
    this.setState({ checked: e.target.checked }, this.save);
  }
  
  save() {
    axios
      .post(todoingServer.path(`/${this.sublistId}/saveItem`), this.state)
      .then(res => this.setState({ _id: res.data._id }));
  }
  
  saveOnEnter(e) {
    if (e.key == 'Enter') {
      this.save(e);
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
