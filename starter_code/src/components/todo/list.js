import React from 'react';
import {  ListGroup } from 'react-bootstrap';



function TodoList(props) {
  return (
    <ListGroup className="lists">
      {props.list.map(item => (
        <ListGroup.Item variant={item.complete ? 'danger' : 'success'} 
          className={`complete-${item.complete.toString()}`}
          key={item._id}
           
        >
          <span  className="todoList" onClick={() => props.handleComplete(item._id)}>
            {item.text}
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );

}

export default TodoList;
