import React from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends React.Component {
  getStyle = () =>{
    return {
      background: '#f4f4f4',
      padding: '1px',
      borderBottom: '10px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through':'none'
    }
  }

  render() {
    return (
      <div style = {this.getStyle()}>
        <p>
          <input type='checkbox' /> {' '}
          {this.props.todo.title}
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};
