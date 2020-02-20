import React from 'react';
import { Container } from 'react-bootstrap';
import ToDolist from './components/ToDolist/ToDolist';
import './App.css';
import InputToDo from './components/InputToDo/InputToDo';

class App extends React.Component {
  state = {
    taskList: [
      {
        id: 1,
        desc: 'Buy Tabac !!!!!',
        isComplete: false
      }
    ]
  };
  deleteItem = i => {
    console.log('TCL: App -> i', i);

    this.setState({
      taskList: this.state.taskList.filter(el => el.id !== i)
    });
  };
  addItem = newItem => {
    this.setState({
      taskList: [...this.state.taskList, newItem]
    });
  };
  complete = id => {
    this.setState({
      taskList: this.state.taskList.map((el, index) =>
        el.id === id ? { ...el, isComplete: !el.isComplete } : el
      )
    });
  };
  render() {
    return (
      <Container>
        <InputToDo addItem={this.addItem} />
        <ToDolist
          deleteItem={this.deleteItem}
          taskList={this.state.taskList}
          complete={this.complete}
        />
      </Container>
    );
  }
}

export default App;
