import React, { Component } from 'react';
import './List.css';
import ListItem from './ListItem.js';

class List extends Component {
  
  constructor(props) {
    super(props);
    this.state = props.list;
  }
  
  render() {
    return (
      <div>
        <p>
          <input type="text" 
                 value={this.state.title} 
                 className="list-subtitle"></input>
        </p>
        {this.state.items.map(item => <ListItem item={item}></ListItem>)}
        <input type="text" className="list-item-input new"></input>
      </div>
    );
  }

}


export default List;
