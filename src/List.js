import React, { Component } from 'react';
import './List.css';
import ListItem from './ListItem.js';

class List extends Component {
  
  constructor(props) {
    super(props);
    this.state = props.list;
  }
  
  createNewListItemOnEnter(event) {
    if (event.key == 'Enter') {
      this.createNewListItem(event);
    }
  }
  
  createNewListItem(event) {
    let value = event.target.value;
    if (value) {
      let items = this.state.items;
      items.push({ text: value, checked: false });
      this.setState({ ...items });
      
      this.newInput.value = '';
      setTimeout(() => this.newInput.focus(), 100);
    }
  }
  
  onTextChange(e) {
    this.setState({ title: e.target.value });
  }
  
  render() {
    return (
      <div>
        <p>
          <input type="text" 
                 value={this.state.title} 
                 onChange={this.onTextChange.bind(this)}
                 className="list-subtitle"></input>
        </p>
        {this.state.items.map(item => <ListItem item={item} sublistId={this.state._id}></ListItem>)}
        <input type="text"
               onBlur={this.createNewListItem.bind(this)}
               ref={ me => { this.newInput = me; }}
               onKeyDown={this.createNewListItemOnEnter.bind(this)}
               className="list-item-input"></input>
      </div>
    );
  }

}


export default List;
