/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { Form, Button } from 'react-bootstrap';
import useForm from '../../hooks/useForm';

import './todo.scss';

export default (props) => {

  const [handleSubmit, handleInputChange] = useForm(fromCallback)

  function fromCallback(item) {
    props.handleSubmit(item);
  }


  return (
    <>
      <h3>Add Item</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Label>
          <span>To Do Item</span>
          <Form.Control
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </Form.Label>
        <Form.Label>
          <span>Difficulty Rating</span>
          <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
        </Form.Label>
        <Form.Label>
          <span>Assigned To</span>
          <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
        </Form.Label>
        <Button type="submit" >Add Item</Button>
      </Form>
    </>
  );

}
