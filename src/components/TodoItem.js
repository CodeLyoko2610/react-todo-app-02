import React from 'react';

export default class TodoItem extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.todo.title}</p>
      </div>
    );
  }
}
