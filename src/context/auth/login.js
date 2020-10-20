/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { If, Then, Else } from '../../components/if/if.js';
import base64  from 'base-64';


function Login(props) {
  const [state, setList] = useState(1);
  const handleSignUpChange = () => {
    setList(2)
  }
  const handleSignInChange = () => {
    setList(1)
  }
  const handleSign_In_UP_Process = (e) =>{
    e.preventDefault();
    var todoAPI = 'https://todo-api-laith.herokuapp.com/api/v1/users/signin'
    if(state === 1){
      var input = `${document.getElementById('name').value}:${document.getElementById('pass').value}`;
      var encodedData = base64.encode(input);
      encodedData = `Basic ${encodedData}`
      console.log(`${encodedData} ==> ${input}`);

      fetch(todoAPI, {
        method: 'post',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Authorization': encodedData },
        body: JSON.stringify({
          name:document.getElementById('name').value,
          pass:document.getElementById('pass').value
        })
      })
        .then(response => {
          console.log(response);
          response.json()
        })
        .then(savedItem => {
          // setList([...list, savedItem])
        })
        .catch(console.error);
    }else{
    }
  }
  return (
    <>
        <If condition={state === 1}>
          <Then>
            {/* <h3>sign In</h3> */}
          </Then>
          <Else>
            {/* <h3>sign Up</h3> */}
          </Else>
        </If>

        <Form onSubmit={handleSign_In_UP_Process} style={{ margin: '10px' }}>

          <Form.Label>
            <Form.Control
              id='name'
              name="text"
              placeholder="username"
            />
          </Form.Label>
          <Form.Label>
            <Form.Control
              id='pass'
              name="pass"
              placeholder="password"
              type="password"
            />
          </Form.Label>

          <If condition={state === 1}>
            <Then>
              <Button type="submit" variant="primary">Log in</Button>{' '}
            </Then>
            <Else>
            <Button type="submit" variant="primary">sign in</Button>{' '}
              {/* <Button onClick={handleSignInChange} variant="primary">back</Button>{' '} */}
            </Else>
          </If>

        </Form>

    </>
  );
}
export default Login;