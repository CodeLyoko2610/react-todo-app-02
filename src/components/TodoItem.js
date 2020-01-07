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
    let {title, id} = this.props.todo; //Destructuring

    return (
      <div style = {this.getStyle()}>
        <p>
          {/* Together with this, pass also the id of the item where markComplete is invoked */}
          <input type='checkbox' onChange={this.props.markComplete.bind(this, id)} /> {' '}
          {title}
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};
