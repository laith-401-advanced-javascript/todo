/* eslint-disable no-unused-vars */
import React from 'react';
import {  ListGroup , Card } from 'react-bootstrap';



function TodoList(props) {
  return (
    <ListGroup className="lists">
      {props.list.map((item,idx) => (
        <ListGroup.Item variant={item.complete ? 'danger' : 'success'} 
          className={`complete-${item.complete.toString()}`}
          key={idx}
           
        >
          <Card  className="todoList" onClick={() => props.handleComplete(item._id)}>
            
            {item.text}
            {item.complete}
            {item.difficulty}
            {item.assignee}
            
          </Card>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );

}

export default TodoList;
