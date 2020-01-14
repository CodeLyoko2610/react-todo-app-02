import React from 'react';

export default class AddTodo extends React.Component {
  state = {
    title: ''
  }; //component level state - only live inside this component

  onChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  render() {
    return (
      <form style={{ display: 'flex' }}>
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
