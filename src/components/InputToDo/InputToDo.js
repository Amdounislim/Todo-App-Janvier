import React, { Component } from 'react';
import { Card, Form, InputGroup, FormControl, Button } from 'react-bootstrap';

class InputToDo extends Component {
  state = {
    newInput: {
      id: '',
      desc: '',
      isComplete: false
    }
  };
  handleClick = e => {
    e.preventDefault();
    this.props.addItem(this.state.newInput);
  };
  handelChange = e =>
    this.setState({
      ...this.state,
      newInput: {
        ...this.state.newInput,
        id: Date.now(),
        desc: e.target.value
      }
    });
  render() {
    return (
      <Card bg='primary'>
        <Card.Body>
          <h1 className={'text-white'}>To-Do-App !</h1>
          <Form onSubmit={this.handleClick}>
            <Form.Group>
              <InputGroup className='mb-3'>
                <FormControl
                  aria-label="Recipient's username"
                  aria-describedby='basic-addon2'
                  onChange={this.handelChange}
                />
                <InputGroup.Append>
                  <Button variant='success' onClick={this.handleClick}>
                    +
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
export default InputToDo;
