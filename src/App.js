import React from 'react';
import './App.css';
import uuid from 'uuid';

//Import components
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import AddTodo from './components/layouts/AddTodo';

export default class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'More focus when coding.',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Think before you speak or do anything.',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Trying your best when you decide to do something.',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Control my own emotions.',
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

  //Delete todo
  delTodo = id => {
    this.setState({
      //todos: this.state.todos.filter(todo => todo.id !== id) //either way is okay
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  //Add new todo
  addTodo = title => {
    let newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}
