import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {items.map((item) => (
          <TodoItem
            key={item.id}
            handleDelete={() => handleDelete(item.id)}
            title={item.title}
          />
        ))}
        <button type="button" className="btn btn-danger btn-block my-5">
          clear list
        </button>
      </ul>
    );
  }
}
