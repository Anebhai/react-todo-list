import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    const { title, handleEdit, handleDelete } = this.props;
    return (
      <div>
        <li className="list-group-item d-flex my-2 justify-content-between">
          <h6>{title}</h6>
          <div className="todo-icon">
            <span className="mx-2 text-success">
              <i className="fas fa-pen" onClick={handleEdit}></i>
            </span>
            <span className="mx-2 text-danger">
              <i className="fas fa-trash" onClick={handleDelete}></i>
            </span>
          </div>
        </li>
      </div>
    );
  }
}
