import React, { Component } from 'react';
import { Card, Form, InputGroup, FormControl, Button } from 'react-bootstrap';

class InputToDo extends Component {
  state = {
    desc: ''
  };
  handleClick = e => {
    e.preventDefault();
    this.props.addItem({
      id: Date.now(),
      desc: this.state.desc,
      isComplete: false
    });
  };
  handelChange = e =>
    this.setState({
      desc: e.target.value
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
