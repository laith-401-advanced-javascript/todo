/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { ListGroup, Card, Badge, Button, Dropdown, Pagination, Container, Row, Col } from 'react-bootstrap';

import { ToggleContext } from '../../settings/HideShow';
import { PaginationContext } from '../../settings/paggination';



function TodoList(props) {
  // console.log('****',props);
  const toggleContext = useContext(ToggleContext);
  const pagination = useContext(PaginationContext);


  return (
    <>

      <ListGroup className="lists">
        {pagination.currentItem.map((item, idx) => (
          <ListGroup.Item variant={item.complete ? "danger" : "success"} className={`complete-${item.complete}-${toggleContext.mode}`}
            key={item._id}
          >
            <Card className="todoList"  onClick={() => props.handleComplete(item._id)}>

              <Badge style={{ width: '80px', top: '1.8em', position: 'relative' }} variant={item.complete ? 'danger' : 'success'} className={`complete-${item.complete}`}>
                {item.complete ? 'Complete' : 'pending'}
              </Badge>{' '}

              <Card.Subtitle className="mb-2 text-muted" style={{ width: '130px', left: '7em', top: '0.3em', position: 'relative' }}>{item.assignee}</Card.Subtitle>
              <Card.Title>{item.text}</Card.Title>

              <p style={{ position: 'relative', left: "27em", top: "3em" }}> Difficulty: {item.difficulty}  </p>

              <Button onClick={() => props.handleDelete(item._id)} type="submit" variant="danger" className="removeBtn" style={{ width: "2.2em", position: 'relative', left: "22em", bottom: "5.3em" }}>X</Button>{' '}

            </Card>
          </ListGroup.Item>
        ))}

      </ListGroup>  

      {/* 
       <Pagination>
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item >{3}</Pagination.Item>
        <Pagination.Next />
      </Pagination>  */}


    </>
  );

}

export default TodoList;