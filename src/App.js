import React from 'react';
import './App.css';

//Import components
import Todos from './components/Todos';

export default class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'More focus when coding.',
        completed: true
      },
      {
        id: 2,
        title: 'Think before you speak or do anything.',
        completed: false
      },
      {
        id: 3,
        title: 'Trying your best when you decide to do something.',
        completed: false
      }
    ]
  };

  render() {
    return (
      <div>
        <h1>App</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}
