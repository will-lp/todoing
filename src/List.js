import React, { Component } from 'react';

class List extends Component {
  
  constructor(props) {
    super(props);
    this.state = props.list;
    console.log('list this.state', this.state);
  }
  
  render() {
    return (
      <div>
        <p>{this.state.title}</p>
        {this.state.items.map(item =>
          <div>
            <input type="checkbox"></input>
            <input type="text" value={item.text}></input>
          </div>
        )}
      </div>
    );
  }

}


export default List;
