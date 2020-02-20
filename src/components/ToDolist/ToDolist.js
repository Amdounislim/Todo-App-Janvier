import React from 'react';
import Todo from '../Todo/Todo';

const ToDolist = props => {
  return (
    <div>
      {props.taskList.map((task, key) => (
        <Todo
          task={task}
          key={key}
          deleteItem={props.deleteItem}
          complete={props.complete}
        />
      ))}
    </div>
  );
};

export default ToDolist;
