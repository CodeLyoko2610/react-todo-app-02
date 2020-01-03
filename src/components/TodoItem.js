import React from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.todo.title}</p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};
