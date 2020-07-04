import React, { Component } from 'react';
import Item from './TodoItem';

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>Hello I am todo component</h1>
        <Item />
      </div>
    );
  }
}
