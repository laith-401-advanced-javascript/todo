/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import useAjax from '../../hooks/useAjax';
import TodoForm from './form.js';
import TodoList from './list.js';
import ToggleHide from '../../settings/HideShow';
import ToggleList from '../todo/ToggleList';

import PaginationContext from '../../settings/paggination';
import Paggination from '../todo/TogglePaggination';
import DropDown from '../todo/dropDown.js';

import './todo.scss';


const todoAPI = 'https://todo-api-laith.herokuapp.com/api/v1/todos';
// https://api-js401.herokuapp.com/api/v1/todo


const ToDo = () => {

  const [list, setList] = useState([]);
  const [axiosApi] = useAjax();


  const _addItem = (item) => {
    console.log('<<<<<');
    item.due = new Date();
    axiosApi(
      todoAPI,
      'post',
      item
    ).then(({ data: savedItem }) => {
      setList([...list, savedItem])
    })
      .catch(console.error);
  };



  const _toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete

      let url = `${todoAPI}/${id}`;
      axiosApi(url, "put", item)
        .then(() => {
          setList(list.map(listItem => listItem._id === item._id ? item : listItem));
        })
        .catch(console.error);
    }
  };

  const _getTodoItems = () => {
    axiosApi(todoAPI, "get")
      .then(({ data }) => setList(data.results))
      .catch(console.error);
  };

  useEffect(_getTodoItems, []);

  const _deleteItem = (id) => {
    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      let url = `${todoAPI}/${id}`;
      axiosApi(url, "delete")
        .then(() => {
          setList(list.filter(listItem => listItem._id !== item._id));
        })
        .catch(console.error);
    }
  };


  return (
    <>
      <header>
        <h2>
          There are  {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>
  
        <ToggleHide list={list}>

          <ToggleList />

          <PaginationContext list={list}>

            <DropDown />

            <section className="todo">

              <div>
                <TodoForm handleSubmit={_addItem} />
              </div>

              <div>
                <TodoList
                  list={list}
                  handleDelete={_deleteItem}
                  handleComplete={_toggleComplete}
                />

              </div>
              {/* <Paggination totalItems={list.length} /> */}

            </section>

          </PaginationContext>

        </ToggleHide >

    </>

  );

};

export default ToDo;
