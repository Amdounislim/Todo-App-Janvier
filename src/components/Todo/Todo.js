import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const Todo = ({ task, deleteItem, complete }) => {
  console.log('TCL: Todo -> task', task);
  return (
    <div>
      <ListGroup.Item key={task.id}>
        <Button variant='secondary' onClick={() => complete(task.id)}>
          {task.isComplete ? 'Undo' : 'Complete'}
        </Button>
        <Button variant='danger' onClick={() => deleteItem(task.id)}>
          Delete
        </Button>
        <p
          style={{
            display: 'inline'
          }}
          className={task.isComplete ? 'complete' : ''}
        >
          {task.desc}
        </p>
      </ListGroup.Item>
    </div>
  );
};

export default Todo;
