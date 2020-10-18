import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToDoList from '../components/todo/todo';

test('should render to do list with the added item', async (done) => {


  const list = [{
    'text':'testing the lab',
    'assignee':'Laith',
    'range':'1',
    'complete': true,
  }];

  render (<ToDoList list={list} />);

//   screen.debug();

  const count = screen.getAllByRole('button');
  // console.log('888',count);
  expect(count[0]).toHaveTextContent('Add Item');
  // expect(count[1]).toHaveTextContent('X');
  expect(count).toHaveLength(1);

  done();
});