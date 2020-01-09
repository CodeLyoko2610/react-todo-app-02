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
        completed: false
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

  //Toggle todo's complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      //todos: this.state.todos.filter(todo => todo.id !== id) //either way is okay
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  render() {
    return (
      <div>
        <h1>App</h1>
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}
