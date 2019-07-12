import React, { Component } from 'react'
import ToDoFormContainer from './containers/ToDoFormContainer';
import ToDoListContainer from './containers/ToDoListContainer';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        
        <ToDoFormContainer/>
        <ToDoListContainer/>
      </div>
    )
  }
}

