import React from 'react';

export default class AddTodo extends React.Component {
  state = {
    title: ''
  }; //component level state - only live inside this component

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    }); //Square brackets for the use of computed property - property with value as a result of some methods / functions / properties  with dinamically changing value
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.addTodo(this.state.title);

    this.setState({
      title: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type='text'
          name='title'
          placeholder='Add a new Todo...'
          style={{ flex: '10', padding: '10px' }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type='submit'
          name='Submit'
          style={{ flex: '1' }}
          className='btn'
        />
      </form>
    );
  }
}
