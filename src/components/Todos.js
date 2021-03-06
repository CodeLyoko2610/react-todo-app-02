import React from 'react';
import PropTypes from 'prop-types';

//Import components
import TodoItem from './TodoItem';

export default class Todos extends React.Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};
